import { View, Text,StatusBar,StyleSheet, TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import Header from '../../Components/Header'
import CustomCheckbox from '../../Components/CustomCheckBox';
import { size } from '../../Helpers/sizeHelper/devices';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { PHColor, blue, gray, white } from '../../Helpers/Color';
import SelectDropdown from 'react-native-select-dropdown';
const initialState = { // .................................This object belongs to the employee, as every employee has different permissions.
  Administrator_Role: false,
  CRM_Manager: false,
  Finance: false,
  Company_Editor: false,
};
export default function Design({Navigation}) {
  const [isChecked, setIsChecked] = useState(false);
 
  
  const handleCheckboxChange = (value) => {
    setIsChecked(value);
    console.log('handleCheck',isChecked);
  };
  return (
    <View>
       <StatusBar barStyle="light-content" backgroundColor="#394ECA" />
      <Header label={'Permissions'}/>
      <View style={[{width:'95%',height:size(40),alignSelf:'center',alignItems:'center',flexDirection:'row',marginTop:size(15),backgroundColor:white},styles.dropShadow]}>
      <FontAwesome
              name={'search'}
              color={gray}
              size={size(22)}
              style={{
                alignItems: 'center',
                marginLeft: '2%',
              }}
            />
           <SelectDropdown
              data={['Employee 1', 'Employee 2', 'Employee 3']}
              defaultButtonText="Select Employee"
              // selectedValue={values.leaveType}
              //   onValueChange={handleChange('leaveType')}
              //   onSelect={selectedItem =>
              // handleChange('leaveType')(selectedItem)
              //   }
              buttonTextAfterSelection={selectedItem => selectedItem}
              rowTextForSelection={item => item}
              buttonStyle={{
                backgroundColor: white,
                width: '92%',
                marginLeft: '3%',
                height: size(35),
                fontSize:size(14),
                
              }}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={PHColor}
                    size={size(13)}
                  />
                );
              }}
              buttonTextStyle={{
                fontSize: size(14),
                fontWeight:'500',
                color: gray,
                textAlign: 'left',
                color: PHColor,
              }}
              rowTextStyle={{
                color: PHColor,
                fontSize: size(14),
                textAlign: 'left',
                fontWeight:'500'
              }}
            />
      </View>

<CustomCheckbox
             label="Administrator Role"
             checked={isChecked}
             onChange={()=>{
              handleCheckboxChange

             if(initialState.Administrator_Role==true){
              initialState.Administrator_Role=false;
             }
             else{
              initialState.Administrator_Role=true;
             }
             console.log(initialState)
             }}
            />
            <CustomCheckbox
             label="This employee is CRM Manager"
             checked={isChecked}
             onChange={()=>{
              handleCheckboxChange

             if(initialState.CRM_Manager==true){
              initialState.CRM_Manager=false;
             }
             else{
              initialState.CRM_Manager=true;
             }
             console.log(initialState)
             }}
            />
             <CustomCheckbox
             label="Finance"
             checked={isChecked}
             onChange={()=>{
              handleCheckboxChange

             if(initialState.Finance==true){
              initialState.Finance=false;
             }
             else{
              initialState.Finance=true;
             }
             console.log(initialState)
             }}
            />
             <CustomCheckbox
             label="Company Editor"
             checked={isChecked}
             onChange={()=>{
              handleCheckboxChange

             if(initialState.Company_Editor==true){
              initialState.Company_Editor=false;
             }
             else{
              initialState.Company_Editor=true;
             }
             console.log(initialState)
             }}
            />

            <TouchableOpacity >
            <View style={[{width:'95%',height:size(40),alignSelf:'center',alignItems:'center',justifyContent:'center', flexDirection:'row',marginTop:size(15),backgroundColor:blue},styles.dropShadow]}>
                <Text style={{color:'white',fontSize:size(16),textTransform:'capitalize'}}>save</Text>
            </View>
            </TouchableOpacity>

           
     
    </View>
  )
}
const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    
  },
})