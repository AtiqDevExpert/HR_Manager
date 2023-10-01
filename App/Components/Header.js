import React,{useState} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { size } from '../Helpers/sizeHelper/devices';
import { white } from '../Helpers/Color';
import CustomerAlert from './CustomerAlert';
import { useNavigation } from '@react-navigation/native';
export default function Header({label}) {
  
  const [isModal, setIsModal] = useState(false);
  const navigation = useNavigation();
  const recieveData = data => {
    return setIsModal(data);
    console.log('...............', data);


    
  };
  const Home =()=>{
    navigation.navigate('Home')
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: size(40),
        backgroundColor: '#394ECA',
        
      }}>
         <CustomerAlert isModal={isModal} setIsModal={recieveData}/>
    <TouchableOpacity  style={{
        
          marginLeft: '3%',
          alignSelf:'center',
          
        }}
        onPress={Home}>
    <Image
        source={require('../Source/Images/Logo2.png')}
        style={{
          height: size(22),
          width:size(55),
         
        }}
       
      />
    </TouchableOpacity>
      <Text style={{color:white,alignSelf:'center',marginLeft:'30%', position:'absolute', fontSize:size(16),fontWeight:'bold',textAlign:'center'}}>{label}</Text>
      <TouchableOpacity
        style={{
          width: '12%',
          height: size(16),
          marginLeft: '82%',
          position: 'absolute',
          alignSelf:'center',
        }} 
       >
        <Image source={require('../Source/Images/Manu.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{setIsModal(true);}}
        style={{position: 'absolute', marginLeft: '92%',alignSelf:'center',}}>
        <Icon name="power-off" color="#f5ca01" size={25} />
      </TouchableOpacity>
    </View>
  );
}
