import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Dimensions,
  Animated,
} from 'react-native';
import {size} from '../../Helpers/sizeHelper/devices';
import {black, blue, blueSB, gray, white, yellow} from '../../Helpers/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useIsFocused} from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required('User name Must be Required')
    .min(3, 'User name must be at least 3 characters long'),
  Password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
});

export default function Design({navigation}) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [namefoucs, setNamefoucs] = useState();
  const [passfoucs, setPassfoucs] = useState();
  const screenWirth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  //--------------------------------------------------- use useRef Hook for animate the Views of the screens
  const View1 = useRef(new Animated.Value(1)).current;
  const View2 = useRef(new Animated.Value(1)).current;
  const View3 = useRef(new Animated.Value(1)).current;
  const View4 = useRef(new Animated.Value(1)).current;
  const isFocused = useIsFocused();

  const StartAnimated = () => {
    Animated.timing(View1, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(View2, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true,
    }).start();
    Animated.timing(View3, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    Animated.timing(View4, {
      toValue: 0,
      duration: 6500,
      useNativeDriver: true,
    }).start();
  };

  const handleSubmit = values => {
    // Handle form submission
    console.log(values);
    setName(values.userName);
    setPassword(values.Password);
  };
  useEffect(() => {
    if (isFocused) {
      StartAnimated();
      console.log('isFocused login', isFocused);
    } else {
      console.log('isFocused Login', isFocused);
    }
    return () => {
      View1.setValue(1);
      View2.setValue(1);
      View3.setValue(1);
      View4.setValue(1);
    };
  }, [isFocused]);

  return (
    <ImageBackground
      source={require('../../Source/Images/Login.png')}
      style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#4B7AD4" />
      <Formik
        validationSchema={validationSchema}
        initialValues={{userName: '', Password: ''}}
        onSubmit={values =>
          // same shape as initial values
          console.log(values)
        }>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          values,
          errors,
          isValid,
        }) => (
          <SafeAreaView>
            <Animated.View
              style={[
                {
                  width: '65%',
                  height: size(450),
                  borderRadius: size(10),
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  alignItems: 'center',
                  marginTop: size(140),
                  marginLeft: '17%',
                },
                {
                  transform: [
                    {
                      translateY: View1.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, -500],
                      }),
                    },
                    {
                      scale: View1.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.1],
                      }),
                    },
                  ],
                },
              ]}>
              <Animated.View
                style={[
                  {
                    width: '110%',
                    height: size(430),
                    borderRadius: size(10),
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    alignItems: 'center',
                  },
                  {
                    transform: [
                      {
                        translateY: View2.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, -500],
                        }),
                      },
                      {
                        scale: View2.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.1],
                        }),
                      },
                    ],
                  },
                ]}>
                <Animated.View
                  style={[
                    {
                      width: '110%',
                      height: size(410),
                      borderRadius: size(10),
                      position: 'absolute',
                      backgroundColor: 'rgba(255,255,255,1)',
                    },
                    {
                      transform: [
                        {
                          translateY: View3.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, -500],
                          }),
                        },
                        {
                          scale: View3.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0.1],
                          }),
                        },
                        
                      ],
                    },
                  ]}>
                  <Text
                    style={{
                      color: blue,
                      fontSize: size(18),
                      marginTop: size(60),
                      marginLeft: '7%',
                      fontFamily: 'custom-font',
                    }}>
                    Welcome to
                  </Text>
                  <Text
                    style={{
                      color: black,
                      fontSize: size(18),
                      marginLeft: '7%',
                      fontWeight: '700',
                    }}>
                    HR Manager Application!
                  </Text>
                  <Text
                    style={{
                      color: blue,
                      fontSize: size(28),
                      marginLeft: '7%',
                      fontWeight: 'bold',
                      marginTop: size(20),
                    }}>
                    Login
                  </Text>
                  <View
                    style={[
                      {
                        flexDirection: 'row',
                        height:'auto',
                        marginTop: size(20),
                        marginLeft: '7%',
                        paddingLeft:'3%',
                        borderBottomWidth: 2,
                        backgroundColor: white,
                        borderBottomColor: namefoucs ? '#3BA7A3' : '#B9C4CA',
                        alignItems:'center',
                        width: '85%',
                        borderRadius: size(20),
                        borderLeftWidth: size(1),
                        borderLeftColor: namefoucs ? '#6D91DE' : '#B4BBC3',
                        borderRightWidth: size(1),
                        borderRightColor: namefoucs ? '#6D91DE' : '#B4BBC3',
                      },
                      styles.dropShadow1,
                    ]}>
                    <TextInput
                      placeholder="username"
                      style={{
                        width: '92%',
                        fontFamily: 'Arial',
                        fontSize: size(13),
                      }}
                      onFocus={() => {
                        setNamefoucs(true);
                      }}
                      onChangeText={handleChange('userName')}
                      onBlur={() => {
                        return setNamefoucs(false), handleBlur('userName');
                      }}
                      value={values.phone}
                    />
                    <FontAwesome
                      name={'user'}
                      color={namefoucs ? '#000000' : '#B4BBC3'}
                      size={20}
                    />
                  </View>
                  {touched.userName && errors.userName && (
                    <Text style={styles.Error}>{errors.userName}</Text>
                  )}

                  <View
                    style={[
                      {
                        alignItems:'center',
                        flexDirection: 'row',
                        height: size(40),
                        marginTop: size(10),
                        marginLeft: '7%',
                        borderBottomWidth: 2,
                        backgroundColor: white,
                        borderBottomColor: passfoucs ? '#3BA7A3' : '#B9C4CA',
                        width: '85%',
                        paddingLeft:'3%',
                        borderRadius: size(20),
                        borderLeftWidth: size(1),
                        borderLeftColor: passfoucs ? '#6D91DE' : '#B4BBC3',
                        borderRightWidth: size(1),
                        borderRightColor: passfoucs ? '#6D91DE' : '#B4BBC3',
                      },
                      styles.dropShadow1,
                    ]}>
                    <TextInput
                      placeholder="Password"
                      secureTextEntry
                      style={{
                        width: '92%',
                        fontFamily: 'Arial',
                        fontSize: size(14),
                      }}
                      onFocus={() => {
                        setPassfoucs(true);
                      }}
                      onChangeText={handleChange('Password')}
                      onBlur={() => {
                        setPassfoucs(false);
                        handleBlur('Password');
                      }}
                    />
                    <FontAwesome
                      name={'key'}
                      color={passfoucs ? '#000000' : '#B4BBC3'}
                      size={20}
                    />
                  </View>
                  {touched.Password && errors.Password && (
                    <Text style={styles.Error}>{errors.Password}</Text>
                  )}

                  <TouchableOpacity
                    style={{
                      width: '25%',
                      height: size(35),
                      backgroundColor: isValid ? blue : gray,
                      alignItems: 'center',
                      alignContent: 'center',
                      borderRadius: size(20),
                      marginTop: size(25),
                      marginLeft: '7%',
                    }}
                    onPress={() => {
                      handleSubmit();

                      navigation.navigate('Home');
                    }}
                    disabled={!isValid}>
                    <Text
                      style={{
                        textTransform: 'uppercase',
                        color: white,
                        fontSize: size(14),
                        fontWeight: '700',
                        marginTop: size(7),
                      }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </Animated.View>
            </Animated.View>
            <Animated.View
              style={[
                {
                  position: 'absolute',
                  overflow: 'hidden',
                  width: size(33),
                  height: size(90),
                  backgroundColor: 'white',
                  borderRadius: size(100),
                  marginTop: size(100),
                  marginLeft: '15%',
                  alignContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000000',
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 2,
                },
                {
                  transform: [
                    {
                      translateY: View4.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, -500],
                      }),
                    },
                    {
                      scale: View4.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.1],
                      }),
                    },
                    {
                      rotate: View4.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                  ],
                },
              ]}>
              <Image
                source={require('../../Source/Images/logo1.png')}
                style={{marginTop: size(30)}}
              />
            </Animated.View>
            <Text
              style={{
                alignSelf: 'center',
                color: yellow,
                marginTop: size(10),
                fontSize: size(12),
              }}>
              version 1.0.24
            </Text>
          </SafeAreaView>
        )}
      </Formik>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  dropShadow1: {
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  Error: {
    color: blue,
    marginLeft: '8%',
    fontSize: size(12),
    marginTop: size(2),
  },
});
