import { useNavigation } from '@react-navigation/native';
import React, { useState,useEffect } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { size } from '../Helpers/sizeHelper/devices';
import { blue, gray, gray4, orGray, white } from '../Helpers/Color';
export default function CustomerAlert({isModal,setIsModal}) {
 
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();
  //console.log('.........................isModal: ', modal);
  const noModal = () => {
  setIsModal(false);
  };
  const yesModal = () => {
    return setModal(false), 
    navigation.navigate('Login');
  };


  return (
    //console.log('Customer Alert......',isModal),
   
    <Modal
      visible={isModal}
      transparent={true}
      animationType={'fade'}
      >
         <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0,0.5)',width:'100%',height:size(700)}}>
      <View
        style={[
          {
            backgroundColor: white,
            position: 'absolute',
            width: '75%',
            alignSelf: 'center',
            height: '21%',
            marginTop: size(300),
            borderRadius: size(10),
          },
          styles.modal,
        ]}>
        <View
          style={[
            {
              width: '100%',
              backgroundColor: blue,
              height: size(45),
              flexDirection: 'row',
              borderTopStartRadius: size(10),
              borderTopEndRadius: size(10),
              alignItems: 'center',

              padding: size(5),
            },
          ]}>
          <Text
            style={{
              color: white,
              fontWeight: 'bold',
              padding: size(5),
              fontSize: size(17),
            }}>
            Confirmation
          </Text>
          <Image
            style={{
              width: size(50),
              height: size(30),
              position: 'absolute',
              marginLeft:'76%'
            }}
            source={require('../Source/Images/Logo2.png')}
          />
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            marginTop: size(50),
            position: 'absolute',
            backgroundColor: white,
          }}>
          <Text
            style={{
              color: orGray,
              fontWeight: 'bold',
              marginTop: size(5),
              marginLeft: size(10),
              fontSize: size(14),
              color: gray4,
            }}>
            Are You Sure Want To Log Out ?
          </Text>
        </View>

        <View style={{flexDirection: 'row', flex: 1}}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
             
             noModal();
            }}>
            <View
              style={[
                {
                  //position: 'absolute',
                  width: '75%',
                  height: '35%',
                  backgroundColor: white,
                  marginTop: size(60),
                  padding: size(10),
                  borderRadius: size(10),
                  alignItems: 'center',
                  marginLeft: '15%',
                },
                styles.dropShadow,
              ]}>
              <Text
                style={{
                  color: orGray,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  alignSelf: 'center',
                  fontSize: size(16),
                }}>
                No
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              yesModal();
            }}>
            <View
              style={[
                {
                  width: '75%',
                  height: '35%',
                  backgroundColor: blue,
                  marginTop: size(60),
                  marginLeft: '10%',
                  borderRadius: size(10),
                  alignItems: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text
                style={{
                  color: white,
                  padding: size(10),
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: size(14),
                }}>
                yes
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </Modal>
   
  );
}
const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.2,          
    shadowRadius: 2,
    elevation: 2,
  },
  modal: {
    shadowColor: gray,
   shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
