import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useCallback, useEffect, useState } from 'react';
import { Audio, AVPlaybackStatus, AVPlaybackStatusSuccess } from 'expo-av';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Sound } from 'expo-av/build/Audio';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const AudioPlayer = ({ audio }: { audio: any }) => {
  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<AVPlaybackStatus>();
  const [speed, setSpeed] = useState(1.0);

  async function setAudioSpeed() {
    if (!sound || !status?.isLoaded) return;

    let newSpeed = 1.0;
    if (speed === 1.0) {
      newSpeed = 1.5;
    } else if (speed === 1.5) {
      newSpeed = 2.0;
    } else if (speed === 2.0) {
      newSpeed = 1.0;
    }

    await sound.setRateAsync(newSpeed, true);
    setSpeed(newSpeed);
  }

  useEffect(() => {
    async function configureAudio() {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
      });
    }

    async function loadSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        audio,
        { progressUpdateIntervalMillis: 100 },
        onPlaybackStatusUpdate
      );
      setSound(sound);
    }

    configureAudio();
    loadSound();
  }, [audio]);

  const onPlaybackStatusUpdate = useCallback(
    async (newStatus: AVPlaybackStatus) => {
      setStatus(newStatus);
      if (!newStatus.isLoaded || !sound) {
        return;
      }
      if (newStatus.didJustFinish) {
        await sound.setStatusAsync({ positionMillis: 0 });
        setStatus({ ...newStatus, positionMillis: 0, isPlaying: false });
      }
    },
    [sound]
  );

  async function playSound() {
    if (!sound) return;
    if (status?.isLoaded && status.isPlaying) {
      await sound.pauseAsync();
    } else if (position===duration ) {
      await sound.replayAsync();
    } else {
      await sound.playAsync();
      await sound.setRateAsync(speed, true);
    }
  }

  async function loopSound() {
    if (!sound || !status?.isLoaded) return;

    const currentStatus = status as AVPlaybackStatusSuccess;

    if (currentStatus.isLooping) {
      console.log('Unlooping Sound');
      await sound.setIsLoopingAsync(false);
    } else {
      console.log('Looping Sound');
      await sound.setIsLoopingAsync(true);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const formatMillis = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  const isPlaying = status?.isLoaded ? status.isPlaying : false;
  const isLooping = status?.isLoaded ? status.isLooping : false;
  const position = status?.isLoaded ? status.positionMillis : 0;
  const duration: any = status?.isLoaded ? status.durationMillis : 1;
  const progress = position / duration;

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: withTiming(`${progress * 100}%`, { duration: 100 }),
  }));
  const animatedLineStyle = useAnimatedStyle(() => ({
    width: withTiming(`${progress * 100}%`, { duration: 100 }),
  }));
  return (
    <View style={styles.container}>
      <View style={styles.playbackContainer}>
      <View style={styles.playbackLine} />
      <Animated.View style={[styles.playbackLineMoving, animatedLineStyle]} />
        <Animated.View style={[styles.playbackIndicator, animatedIndicatorStyle]} />
        <Text style={{ position: 'absolute', right: 0, bottom: 0 }}>{formatMillis(duration)}</Text>
        <Text style={{ position: 'absolute', left: 0, bottom: 0 }}>{formatMillis(position)}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.loopButton} onPress={loopSound}>
          <MaterialCommunityIcons name={isLooping ? 'repeat-once' : 'repeat'} size={40} color="#3F566E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton} onPress={playSound}>
          <Ionicons name={isPlaying ? 'pause' : 'play'} size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loopButton} onPress={setAudioSpeed}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' ,color:'#3F566E'}}>{speed}x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '100%',
    position: 'absolute',
    gap: 35,
    bottom: 100,
  },
  playbackContainer: {
    justifyContent: 'center',
    height: '50%',
    width: '75%',
  },
  playbackLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#AFAFAF',
    alignSelf: 'center',
  },
  playbackLineMoving: {
    height: 2,
    backgroundColor: '#3F566E',
    position: 'absolute',},
  playbackIndicator: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: '#3F566E',
    position: 'absolute',
  },
  playButton: {
    backgroundColor: '#3F566E',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 45,
  },
  loopButton: {
    justifyContent: 'center',
    alignItems: 'center',
    
    width: 50,
    height: 70,
  },
});
