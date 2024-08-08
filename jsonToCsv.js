const fs = require('fs');
const { Parser } = require('json2csv');

const surahs = [
    { id: 1, name: "الفاتحة", type: "Meccan", verses: 7 },
    { id: 2, name: "البقرة", type: "Medinan", verses: 286 },
    { id: 3, name: "آل عمران", type: "Medinan", verses: 200 },
    { id: 4, name: "النساء", type: "Meccan", verses: 176 },
    { id: 5, name: "المائدة", type: "Medinan", verses: 120 },
    { id: 6, name: "الأنعام", type: "Meccan", verses: 165 },
    { id: 7, name: "الأعراف", type: "Meccan", verses: 206 },
    { id: 8, name: "الأنفال", type: "Medinan", verses: 75 },
    { id: 9, name: "التوبة", type: "Medinan", verses: 129 },
    { id: 10, name: "يونس", type: "Meccan", verses: 109 },
    { id: 11, name: "هود", type: "Meccan", verses: 123 },
    { id: 12, name: "يوسف", type: "Meccan", verses: 111 },
    { id: 13, name: "الرعد", type: "Medinan", verses: 43 },
    { id: 14, name: "ابراهيم", type: "Meccan", verses: 52 },
    { id: 15, name: "الحجر", type: "Meccan", verses: 99 },
    { id: 16, name: "النحل", type: "Meccan", verses: 128 },
    { id: 17, name: "الإسراء", type: "Meccan", verses: 111 },
    { id: 18, name: "الكهف", type: "Meccan", verses: 110 },
    { id: 19, name: "مريم", type: "Meccan", verses: 98 },
    { id: 20, name: "طه", type: "Meccan", verses: 135 },
    { id: 21, name: "الأنبياء", type: "Meccan", verses: 112 },
    { id: 22, name: "الحج", type: "Medinan", verses: 78 },
    { id: 23, name: "المؤمنون", type: "Meccan", verses: 118 },
    { id: 24, name: "النور", type: "Medinan", verses: 64 },
    { id: 25, name: "الفرقان", type: "Meccan", verses: 77 },
    { id: 26, name: "الشعراء", type: "Meccan", verses: 227 },
    { id: 27, name: "النمل", type: "Meccan", verses: 93 },
    { id: 28, name: "القصص", type: "Meccan", verses: 88 },
    { id: 29, name: "العنكبوت", type: "Meccan", verses: 69 },
    { id: 30, name: "الروم", type: "Meccan", verses: 60 },
    { id: 31, name: "لقمان", type: "Meccan", verses: 34 },
    { id: 32, name: "السجدة", type: "Meccan", verses: 30 },
    { id: 33, name: "الأحزاب", type: "Medinan", verses: 73 },
    { id: 34, name: "سبإ", type: "Meccan", verses: 54 },
    { id: 35, name: "فاطر", type: "Meccan", verses: 45 },
    { id: 36, name: "يس", type: "Meccan", verses: 83 },
    { id: 37, name: "الصافات", type: "Meccan", verses: 182 },
    { id: 38, name: "ص", type: "Meccan", verses: 88 },
    { id: 39, name: "الزمر", type: "Meccan", verses: 75 },
    { id: 40, name: "غافر", type: "Meccan", verses: 85 },
    { id: 41, name: "فصلت", type: "Meccan", verses: 54 },
    { id: 42, name: "الشورى", type: "Meccan", verses: 53 },
    { id: 43, name: "الزخرف", type: "Meccan", verses: 89 },
    { id: 44, name: "الدخان", type: "Meccan", verses: 59 },
    { id: 45, name: "الجاثية", type: "Meccan", verses: 37 },
    { id: 46, name: "الأحقاف", type: "Meccan", verses: 35 },
    { id: 47, name: "محمد", type: "Medinan", verses: 38 },
    { id: 48, name: "الفتح", type: "Medinan", verses: 29 },
    { id: 49, name: "الحجرات", type: "Medinan", verses: 18 },
    { id: 50, name: "ق", type: "Meccan", verses: 45 },
    { id: 51, name: "الذاريات", type: "Meccan", verses: 60 },
    { id: 52, name: "الطور", type: "Meccan", verses: 49 },
    { id: 53, name: "النجم", type: "Meccan", verses: 62 },
    { id: 54, name: "القمر", type: "Meccan", verses: 55 },
    { id: 55, name: "الرحمن", type: "Medinan", verses: 78 },
    { id: 56, name: "الواقعة", type: "Meccan", verses: 96 },
    { id: 57, name: "الحديد", type: "Medinan", verses: 29 },
    { id: 58, name: "المجادلة", type: "Medinan", verses: 22 },
    { id: 59, name: "الحشر", type: "Medinan", verses: 24 },
    { id: 60, name: "الممتحنة", type: "Medinan", verses: 13 },
    { id: 61, name: "الصف", type: "Medinan", verses: 14 },
    { id: 62, name: "الجمعة", type: "Medinan", verses: 11 },
    { id: 63, name: "المنافقون", type: "Medinan", verses: 11 },
    { id: 64, name: "التغابن", type: "Medinan", verses: 18 },
    { id: 65, name: "الطلاق", type: "Medinan", verses: 12 },
    { id: 66, name: "التحريم", type: "Medinan", verses: 12 },
    { id: 67, name: "الملك", type: "Meccan", verses: 30 },
    { id: 68, name: "القلم", type: "Meccan", verses: 52 },
    { id: 69, name: "الحاقة", type: "Meccan", verses: 52 },
    { id: 70, name: "المعارج", type: "Meccan", verses: 44 },
    { id: 71, name: "نوح", type: "Meccan", verses: 28 },
    { id: 72, name: "الجن", type: "Meccan", verses: 28 },
    { id: 73, name: "المزمل", type: "Meccan", verses: 20 },
    { id: 74, name: "المدثر", type: "Meccan", verses: 56 },
    { id: 75, name: "القيامة", type: "Meccan", verses: 40 },
    { id: 76, name: "الانسان", type: "Medinan", verses: 31 },
    { id: 77, name: "المرسلات", type: "Meccan", verses: 50 },
    { id: 78, name: "النبإ", type: "Meccan", verses: 40 },
    { id: 79, name: "النازعات", type: "Meccan", verses: 46 },
    { id: 80, name: "عبس", type: "Meccan", verses: 42 },
    { id: 81, name: "التكوير", type: "Meccan", verses: 29 },
    { id: 82, name: "الإنفطار", type: "Meccan", verses: 19 },
    { id: 83, name: "المطففين", type: "Meccan", verses: 36 },
    { id: 84, name: "الإنشقاق", type: "Meccan", verses: 25 },
    { id: 85, name: "البروج", type: "Meccan", verses: 22 },
    { id: 86, name: "الطارق", type: "Meccan", verses: 17 },
    { id: 87, name: "الأعلى", type: "Meccan", verses: 19 },
    { id: 88, name: "الغاشية", type: "Meccan", verses: 26 },
    { id: 89, name: "الفجر", type: "Meccan", verses: 30 },
    { id: 90, name: "البلد", type: "Meccan", verses: 20 },
    { id: 91, name: "الشمس", type: "Meccan", verses: 15 },
    { id: 92, name: "الليل", type: "Meccan", verses: 21 },
    { id: 93, name: "الضحى", type: "Meccan", verses: 11 },
    { id: 94, name: "الشرح", type: "Meccan", verses: 8 },
    { id: 95, name: "التين", type: "Meccan", verses: 8 },
    { id: 96, name: "العلق", type: "Meccan", verses: 19 },
    { id: 97, name: "القدر", type: "Meccan", verses: 5 },
    { id: 98, name: "البينة", type: "Medinan", verses: 8 },
    { id: 99, name: "الزلزلة", type: "Medinan", verses: 8 },
    { id: 100, name: "العاديات", type: "Meccan", verses: 11 },
    { id: 101, name: "القارعة", type: "Meccan", verses: 11 },
    { id: 102, name: "التكاثر", type: "Meccan", verses: 8 },
    { id: 103, name: "العصر", type: "Meccan", verses: 3 },
    { id: 104, name: "الهمزة", type: "Meccan", verses: 9 },
    { id: 105, name: "الفيل", type: "Meccan", verses: 5 },
    { id: 106, name: "قريش", type: "Meccan", verses: 4 },
    { id: 107, name: "الماعون", type: "Meccan", verses: 7 },
    { id: 108, name: "الكوثر", type: "Meccan", verses: 3 },
    { id: 109, name: "الكافرون", type: "Meccan", verses: 6 },
    { id: 110, name: "النصر", type: "Medinan", verses: 3 },
    { id: 111, name: "المسد", type: "Meccan", verses: 5 },
    { id: 112, name: "الإخلاص", type: "Meccan", verses: 4 },
    { id: 113, name: "الفلق", type: "Meccan", verses: 5 },
    { id: 114, name: "الناس", type: "Meccan", verses: 6 }
];

const sheikhs=[
    {
        id:1, 
        name: 'عبد العزيز سحيم',
        image: 'Abdulaziz_Suhaim.jpg',
    },
    {
        id:2, 
        name: 'عبدالله كامل',
        image: 'Abdullah_Kamel.jpg',
    },
    {
        id:3, 
        name: 'محمد الفقيه',
        image: 'Mohamed_Alfakih.jpg',
    },
    {
        id:4, 
        name: 'محمد الكردي',
        image: 'Mohamed_Alkurdi.jpg',
    },
    {
        id:5, 
        name: 'محمد صديق المنشاوي',
        image: 'Mohamed_Sadik_Almanchewi.jpg',
    },
    {
        id:6, 
        name: 'محمود خليل الحصري',
        image: 'Mahmoud_Khalil_Alhasri.jpg',
    },
    {
        id:7, 
        name: 'هزاع البلوشي',
        image: 'Hazaa_Albalouchi.jpg',   
    },
]

const surahsAudio = [
    {id: 1,sheikh_id:1,name:'الفاتحة', audio:'Alfatiha.mp3'},
        {id: 2,sheikh_id:1,name:'البقرة',},
        {id: 3,sheikh_id:1,name:'آل عمران',},
        {id: 4,sheikh_id:1,name:'النساء',},
        {id: 5,sheikh_id:1,name:'المائدة',},
        {id: 6,sheikh_id:1,name:'الأنعام',},
        {id: 7,sheikh_id:1,name:'الأعراف',},
        {id: 8,sheikh_id:1,name:'الأنفال',},
        {id: 9,sheikh_id:1,name:'التوبة',},
        {id: 10,sheikh_id:1,name:'يونس',},
        {id: 11,sheikh_id:1,name:'هود',},
        {id: 12,sheikh_id:1,name:'يوسف',},
        {id: 13,sheikh_id:1,name:'الرعد',},
        {id: 14,sheikh_id:1,name:'إبراهيم',},
        {id: 15,sheikh_id:1,name:'الحجر',},

        {id: 1,sheikh_id:2,name:'الفاتحة', },
        {id: 2,sheikh_id:2,name:'البقرة',},
        {id: 3,sheikh_id:2,name:'آل عمران',},
        {id: 4,sheikh_id:2,name:'النساء',},
        {id: 5,sheikh_id:2,name:'المائدة',},
        {id: 6,sheikh_id:2,name:'الأنعام',},
        {id: 7,sheikh_id:2,name:'الأعراف',},
        {id: 8,sheikh_id:2,name:'الأنفال',},
        {id: 9,sheikh_id:2,name:'التوبة',},
        {id: 10,sheikh_id:2,name:'يونس',},
        {id: 11,sheikh_id:2,name:'هود',},
        {id: 12,sheikh_id:2,name:'يوسف',},
        {id: 13,sheikh_id:2,name:'الرعد',},
        {id: 14,sheikh_id:2,name:'إبراهيم',},
        {id: 15,sheikh_id:2,name:'الحجر',},

        {id: 1,sheikh_id:3,name:'الفاتحة',},
        {id: 2,sheikh_id:3,name:'البقرة',},
        {id: 3,sheikh_id:3,name:'آل عمران',},
        {id: 4,sheikh_id:3,name:'النساء',},
        {id: 5,sheikh_id:3,name:'المائدة',},
        {id: 6,sheikh_id:3,name:'الأنعام',},
        {id: 7,sheikh_id:3,name:'الأعراف',},
        {id: 8,sheikh_id:3,name:'الأنفال',},
        {id: 9,sheikh_id:3,name:'التوبة',},
        {id: 10,sheikh_id:3,name:'يونس',},
        {id: 11,sheikh_id:3,name:'هود',},
        {id: 12,sheikh_id:3,name:'يوسف',},
        {id: 13,sheikh_id:3,name:'الرعد',},
        {id: 14,sheikh_id:3,name:'إبراهيم',},
        {id: 15,sheikh_id:3,name:'الحجر',},

        {id: 1,sheikh_id:4,name:'الفاتحة', },
        {id: 1,sheikh_id:4,name:'البقرة',},
        {id: 1,sheikh_id:4,name:'آل عمران',},
        {id: 1,sheikh_id:4,name:'النساء',},
        {id: 1,sheikh_id:4,name:'المائدة',},
        {id: 1,sheikh_id:4,name:'الأنعام',},
        {id: 1,sheikh_id:4,name:'الأعراف',},
        {id: 1,sheikh_id:4,name:'الأنفال',},
        {id: 1,sheikh_id:4,name:'التوبة',},
        {id: 1,sheikh_id:4,name:'يونس',},
        {id: 1,sheikh_id:4,name:'هود',},
        {id: 1,sheikh_id:4,name:'يوسف',},
        {id: 1,sheikh_id:4,name:'الرعد',},
        {id: 1,sheikh_id:4,name:'إبراهيم',},
        {id: 1,sheikh_id:4,name:'الحجر',},

        {id: 1,sheikh_id:5,name:'الفاتحة',},
        {id: 2,sheikh_id:5,name:'البقرة',},
        {id: 3,sheikh_id:5,name:'آل عمران',},
        {id: 4,sheikh_id:5,name:'النساء',},
        {id: 5,sheikh_id:5,name:'المائدة',},
        {id: 6,sheikh_id:5,name:'الأنعام',},
        {id: 7,sheikh_id:5,name:'الأعراف',},
        {id: 8,sheikh_id:5,name:'الأنفال',},
        {id: 9,sheikh_id:5,name:'التوبة',},
        {id: 10,sheikh_id:5,name:'يونس',},
        {id: 11,sheikh_id:5,name:'هود',},
        {id: 12,sheikh_id:5,name:'يوسف',},
        {id: 13,sheikh_id:5,name:'الرعد',},
        {id: 14,sheikh_id:5,name:'إبراهيم',},
        {id: 15,sheikh_id:5,name:'الحجر',},

        {id: 1,sheikh_id:6,name:'الفاتحة',},
        {id: 2,sheikh_id:6,name:'البقرة',},
        {id: 3,sheikh_id:6,name:'آل عمران',},
        {id: 4,sheikh_id:6,name:'النساء',},
        {id: 5,sheikh_id:6,name:'المائدة',},
        {id: 6,sheikh_id:6,name:'الأنعام',},
        {id: 7,sheikh_id:6,name:'الأعراف',},
        {id: 8,sheikh_id:6,name:'الأنفال',},
        {id: 9,sheikh_id:6,name:'التوبة',},
        {id: 10,sheikh_id:6,name:'يونس',},
        {id: 11,sheikh_id:6,name:'هود',},
        {id: 12,sheikh_id:6,name:'يوسف',},
        {id: 13,sheikh_id:6,name:'الرعد',},
        {id: 14,sheikh_id:6,name:'إبراهيم',},
        {id: 15,sheikh_id:6,name:'الحجر',},

        {id: 1,sheikh_id:7,name:'الفاتحة',},
        {id: 2,sheikh_id:7,name:'البقرة',},
        {id: 3,sheikh_id:7,name:'آل عمران',},
        {id: 4,sheikh_id:7,name:'النساء',},
        {id: 5,sheikh_id:7,name:'المائدة',},
        {id: 6,sheikh_id:7,name:'الأنعام',},
        {id: 7,sheikh_id:7,name:'الأعراف',},
        {id: 8,sheikh_id:7,name:'الأنفال',},
        {id: 9,sheikh_id:7,name:'التوبة',},
        {id: 10,sheikh_id:7,name:'يونس',},
        {id: 11,sheikh_id:7,name:'هود',},
        {id: 12,sheikh_id:7,name:'يوسف',},
        {id: 13,sheikh_id:7,name:'الرعد',},
        {id: 14,sheikh_id:7,name:'إبراهيم',},
        {id: 15,sheikh_id:7,name:'الحجر',},
]

const fields = ['id', 'name', 'type', 'verses'];
const fields2 = ['id', 'name', 'image'];
const fields3 = ['id', 'name', 'audio'];
const opts = { fields };
const opts2 = { fields2 };
const opts3 = { fields3 };

try {
    const parser = new Parser(opts);
    const parser2 = new Parser(opts2);
    const parser3 = new Parser(opts3);
    const csv = parser.parse(surahs);
    const csv2 = parser2.parse(sheikhs);
    const csv3 = parser3.parse(surahsAudio);
    fs.writeFileSync('surahs.csv', csv);
    fs.writeFileSync('sheikhs.csv', csv2);
    fs.writeFileSync('surahsAudio.csv', csv3);
    console.log('CSV file has been created successfully');
} catch (err) {
    console.error(err);
}