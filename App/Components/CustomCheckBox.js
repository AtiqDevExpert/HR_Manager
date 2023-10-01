import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { gray, white } from '../Helpers/Color';
import { size } from '../Helpers/sizeHelper/devices';
const CustomCheckbox = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleToggle = () => {
    setIsChecked(!isChecked);

    console.log('handleCheck.........', !isChecked);

  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.container}>
      <View style={[{ width: '95%', height: size(40), alignSelf: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: white }, styles.dropShadow]}>
        <View style={[styles.checkbox, isChecked && styles.checkedBox]}>
          {isChecked && <FontAwesome
            name={'check'}
            color={isChecked ? '#55CF8C' : 'gray'}
            size={17}
            style={{
              alignItems: 'center',
            }}
          />}
        </View>
        <Text style={{ fontSize: size(14), fontWeight: '500' }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    // borderWidth:0.2,
  },
  container: {
    marginTop: size(10),
    alignItems: 'center',
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: gray,
    //borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%'
  },
  checkedBox: {
    backgroundColor: '#fff',
    borderColor: '#55CF8C',
  },
  checkmark: {
    color: '#55CF8C',
  },
});

export default CustomCheckbox;