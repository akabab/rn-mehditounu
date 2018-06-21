import React from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import banana from '../assets/imgs/banana.png';
import mehdinu from '../assets/imgs/mehdinu.png'

const MONEY_DIMENSIONS = { width: 43, height: 60 };
const SCREEN_DIMENSIONS = Dimensions.get('window');
const WIGGLE_ROOM = 50;

const FlippingImage = ({ back = false, delay, duration = 1000, source, style = {} }) => (
  <Animatable.Image
    animation={{
      from: { rotateX: back ? '0deg' : '180deg', rotate: !back ? '180deg' : '0deg' },
      to: { rotateX: back ? '360deg' : '-180deg', rotate: !back ? '180deg' : '0deg' },
    }}
    duration={duration}
    delay={delay}
    easing="linear"
    iterationCount="infinite"
    useNativeDriver
    source={source}
    style={{
      ...style,
      backfaceVisibility: 'hidden',
    }}
  />
);

const Swinging = ({ amplitude, rotation = 7, delay, duration = 700, children }) => (
  <Animatable.View
    animation={{
      0: {
        translateX: -amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${rotation}deg`,
      },
      0.5: {
        translateX: 0,
        translateY: 0,
        rotate: '0deg',
      },
      1: {
        translateX: amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${-rotation}deg`,
      },
    }}
    delay={delay}
    duration={duration}
    direction="alternate"
    easing="ease-in-out"
    iterationCount="infinite"
    useNativeDriver
  >
    {children}
  </Animatable.View>
);

const Falling = ({ duration, delay, style, children }) => (
  <Animatable.View
    animation={{
      from: { translateY: -MONEY_DIMENSIONS.height - WIGGLE_ROOM },
      to: { translateY: SCREEN_DIMENSIONS.height + WIGGLE_ROOM },
    }}
    duration={duration}
    delay={delay}
    easing={t => Math.pow(t, 1.7)}
    iterationCount="infinite"
    useNativeDriver
    style={style}
  >
    {children}
  </Animatable.View>
);

const Mehdi = ({ children }) => (
  <ImageBackground source={mehdinu} style={{ flex: 1 }}>
    {children}
  </ImageBackground>
);

const randomize = max => Math.random() * max;

const range = count => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i);
  }
  return array;
};

const MakeItRain = ({ count = 15, duration = 5000 }) => (
  <Mehdi>
    {range(count)
      .map(i => randomize(1000))
      .map((flipDelay, i) => (
        <Falling
          key={i}
          duration={duration}
          delay={i * (duration / count)}
          style={{
            position: 'absolute',
            paddingHorizontal: WIGGLE_ROOM,
            left: randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width) - WIGGLE_ROOM,
          }}
        >
          <Swinging amplitude={MONEY_DIMENSIONS.width / 5} delay={randomize(duration)}>
            <FlippingImage source={banana} delay={flipDelay} />
            <FlippingImage
              source={banana}
              delay={flipDelay}
              back
              style={{ position: 'absolute' }}
            />
          </Swinging>
        </Falling>
      ))}
  </Mehdi>
);

export default MakeItRain;
