import React, { useEffect, useRef } from 'react';
import {
  Animated,
  ImageBackground,
  StatusBar,
  View
} from 'react-native';

import { white } from '../../Helpers/Color';
import { size } from '../../Helpers/sizeHelper/devices';
export default function Design({navigation}) {
  const logo = useRef(new Animated.Value(1)).current;
  const textvalue = useRef(new Animated.Value(1)).current;
  setTimeout(() => {
    navigation.navigate('Login');
  }, 6000);
  const startAnimation = () => {
    Animated.timing(logo, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start();
    Animated.timing(textvalue, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <StatusBar barStyle="light-content" backgroundColor="#3A6CCF" />
      <ImageBackground
        source={require('../../Source/Images/Splashbg.png')}
        style={{flex: 1, justifyContent: 'center'}}>
        <Animated.Image
          source={require('../../Source/Images/Logo.png')}
          style={[
            {alignSelf: 'center', width: size(140), height: size(72)},
            {
              transform: [
                {
                  translateY: logo.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, -500],
                  }),
                },
                {
                  scale: logo.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.1],
                  }),
                },
                {
                  rotate: logo.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Text
          style={[
            {
              color: white,
              alignSelf: 'center',
              marginTop: size(30),
              fontSize: size(14),
            },
            {
              transform: [
                {
                  translateX: textvalue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 400],
                  }),
                },
              ],
            },
          ]}>
          Empowering your Business with HR Solutions{' '}
        </Animated.Text>
      </ImageBackground>
    </View>
  );
}

//radial-gradient(circle at center, red 0, blue, green 100%)
