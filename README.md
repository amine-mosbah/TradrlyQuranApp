# TradrlyQuranApp

An early-stage Qur'an reading app for Android, iOS and web, built with React Native and Expo during a first-year internship (July 2024).

> **Status: prototype.** The repository contains the project setup, routing and a branded welcome screen. The reading, audio, adhkar and prayer-time features below are the **planned scope** from the internship specification and are not implemented yet.

## What it does today

- Boots an Expo Router app (file-based routing) with a root `Stack` navigator (`app/_layout.tsx`)
- Shows a branded welcome screen: the app logo centered on a dark slate background (`app/welcomeScreen.tsx`)
- Runs on Android, iOS and web from one TypeScript codebase (`app.json`, `npm run android|ios|web`)
- Supports light/dark system themes through shared theming helpers (`hooks/useThemeColor.ts`, `constants/Colors.ts`, `components/ThemedText.tsx`)

## Planned scope (from the internship specification)

The specification (*cahier des charges*) written for the internship defines four modules:

- **Qur'an reading**: full Arabic text, navigation by surah / juz' / verse, search, bookmarks, night mode
- **Audio recitation**: reciter selection, background playback, repeat and loop
- **Supplications and adhkar**: categorized duas, translations, dhikr counter, reminders
- **Prayer times and Qibla**: location-based times, calculation methods, adhan notifications, Qibla compass

## Tech stack

- **React Native 0.74** with **Expo SDK 51**
- **Expo Router 3** (file-based navigation, typed routes enabled)
- **TypeScript** (strict mode)
- **Jest** with `jest-expo` (snapshot test for `ThemedText`)
- `react-native-reanimated`, `react-native-gesture-handler`, `@expo/vector-icons`

## Getting started

Requirements: Node.js LTS and the Expo Go app (or an Android emulator / iOS simulator).

```bash
git clone https://github.com/amine-mosbah/TradrlyQuranApp.git
cd TradrlyQuranApp
npm install
npm start            # expo start, then scan the QR code with Expo Go
```

Other scripts from `package.json`:

| Command | What it does |
| --- | --- |
| `npm run android` | Start Expo and open on an Android device/emulator |
| `npm run ios` | Start Expo and open on the iOS simulator |
| `npm run web` | Start Expo for the web |
| `npm test` | Run Jest in watch mode |
| `npm run lint` | Run `expo lint` |

## Project structure

```
app/                 Expo Router routes
  _layout.tsx        Root Stack navigator
  welcomeScreen.tsx  Welcome screen with the app logo
screens/             Copy of the welcome screen (outside the router)
components/          Themed UI components (ThemedText, ThemedView, ...)
constants/Colors.ts  Light/dark color palette
hooks/               Color-scheme and theme-color hooks
assets/              App icon, splash screen, welcome logo, fonts
app-example/         Default Expo template screens, kept for reference
scripts/             Expo's reset-project helper
```

## Context

Built by Mohamed Amine Ben Mosbah, software engineering student at ENISo (Tunisia), as a first-year internship project (summer 2024). Intended for educational use.

## Next steps

- Add a Qur'an text data source and a surah list / reader screen
- Add audio playback (e.g. `expo-av`) for recitations
- Add prayer-time calculation and location permissions
- Remove the Expo template leftovers (`app-example/`, `components/HelloWave.tsx`, ...)
