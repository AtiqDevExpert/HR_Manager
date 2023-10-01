import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../../Components/Header';
import {PHColor, black, blue, white} from '../../Helpers/Color';
import {size} from '../../Helpers/sizeHelper/devices.ios';
import Vocations from '../../Source/Data/Vocations';
export default function Design() {
  const [isIndex,setIsIndex] = useState();
  const [isOpened, setIsOpen] = useState([]);
  const progress = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
 const setArrayLength = (length) => {
    // Create a new array with the desired length
    const newArray = Array(length).fill(false);

    // Update the state with the new array
    setIsOpen(newArray);
  };
  const changeValueAtIndex = (index, value) => {
    // Update the state with the modified array
    setIsOpen(prevArray => prevArray.map((item, i) => (i === index ? value : item)));
  };

  useEffect(() => {
    setArrayLength(Vocations.length);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.spring(scale, {toValue: 1.5, useNativeDriver: true}).start();
  }, []);

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#394ECA" />
      <Header label={'Vocations Structures'} />
      <FlatList
        data={Vocations}
        renderItem={({item, index}) => (
          <TouchableOpacity
                
                onPress={() => {
                  
                  changeValueAtIndex(index,!isOpened[index]);
                  
                  console.log('array ,,,,,,,',isOpened);
                }}>

                
          <Animated.View
            style={[
              {
                width: '90%',
                height: isOpened[index] ? size(135) : size(50),
                backgroundColor: white,
                alignSelf: 'center',
                marginTop: size(10),
              },
              {
                transform: [
                  {
                    translateY: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, -500],
                    }),
                  },
                ],
              },
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: isOpened[index] ? blue : PHColor,
                  marginTop: size(10),
                  marginLeft: '3%',
                  fontSize: size(16),
                }}>
                {item.id}
              </Text>
              <Text
                style={{
                  color: isOpened[index] ? blue : PHColor,
                  marginTop: size(10),
                  marginLeft: '3%',
                  fontSize: size(18),
                  fontWeight: '700',
                }}>
                {item.Allonce}
              </Text>
              
                <FontAwesome
                  name={isOpened[index] ? 'chevron-up' : 'chevron-down'}
                  color={isOpened[index] ? blue : PHColor}
                  size={size(14)}
                  style={{
                    marginTop: size(15),
                    marginLeft: '90%',
                    position: 'absolute',
                  }}
                />
              
            </View>
            {isOpened[index] ? (
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: black,
                      marginTop: size(10),
                      marginLeft: '3%',
                      fontSize: size(14),
                      fontWeight: '500',
                    }}>
                    Effective Date:
                  </Text>
                  <Text
                    style={{
                      color: PHColor,
                      marginTop: size(10),
                      marginLeft: '1%',
                      fontSize: size(14),
                    }}>
                    {item.Affective}
                  </Text>
                  <Text
                    style={{
                      color: black,
                      marginTop: size(10),
                      marginLeft: '15%',
                      fontSize: size(14),
                      fontWeight: '500',
                    }}>
                    Payee Group:
                  </Text>
                  <Text
                    style={{
                      color: PHColor,
                      marginTop: size(10),
                      marginLeft: '1%',
                      fontSize: size(14),
                    }}>
                    {item.pay_Group}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: black,
                      marginTop: size(10),
                      marginLeft: '3%',
                      fontSize: size(14),
                      fontWeight: '500',
                    }}>
                    Department:
                  </Text>
                  <Text
                    style={{
                      color: PHColor,
                      marginTop: size(10),
                      marginLeft: '1%',
                      fontSize: size(14),
                    }}>
                    {item.Department}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: black,
                      marginTop: size(10),
                      marginLeft: '3%',
                      fontSize: size(14),
                      fontWeight: '500',
                    }}>
                    Designestion:
                  </Text>
                  <Text
                    style={{
                      color: PHColor,
                      marginTop: size(10),
                      marginLeft: '1%',
                      fontSize: size(14),
                    }}>
                    {item.Designestions}
                  </Text>
                </View>
              </View>
            ) : null}
          </Animated.View>
          </TouchableOpacity>
        )}
      />
<View style={styles.AddButton}>
      <TouchableOpacity >
        
          <Icon name="plus" size={30} color={'#ffff'} />
       
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AddButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 75,
    backgroundColor: blue,
    marginLeft: '83%',
    marginTop: size(750),
    borderRadius: size(100),
      shadowColor: '#000000',
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 5,
    
  },
});
