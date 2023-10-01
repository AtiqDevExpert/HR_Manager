import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Header from '../../Components/Header';
import {PHColor, blue, gray, orGray, white} from '../../Helpers/Color';
import {size} from '../../Helpers/sizeHelper/devices.ios';
import List from '../../Source/Data/FlatList';

export default function Design() {
  const StatusColor = Status => {
    switch (Status) {
      case 'Working':
        return '#55CF8D';
        break;
      case 'On Vacation':
        return '#F9B633';
        break;
      case 'Terminate':
        return '#F70068';
        break;
      default:
        return gray;
        break;
    }
  };
  return (
    <View style={{}}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#394ECA" />
        <Header label={'Employees List'} />
        <View style={{flexDirection: 'row'}}>
          <View //......................................................................Designations................................................................................................
            style={[
              {
                marginTop: size(20),
                width: '37%',
                marginLeft: '5%',
                backgroundColor: white,
              },
              styles.dropShadow,
            ]}>
            <SelectDropdown
              data={['SQA Engineer', 'IOS ENgineer', 'Android Developer']}
              defaultButtonText="Designations"
              // selectedValue={values.leaveType}
              //   onValueChange={handleChange('leaveType')}
              //   onSelect={selectedItem =>
              // handleChange('leaveType')(selectedItem)
              //   }
              buttonTextAfterSelection={selectedItem => selectedItem}
              rowTextForSelection={item => item}
              buttonStyle={{
                backgroundColor: white,
                width: '100%',
                marginLeft: '1%',
                height: size(35),
              }}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={PHColor}
                    size={size(12)}
                  />
                );
              }}
              buttonTextStyle={{
                fontSize: size(12),
                color: orGray,
                textAlign: 'left',
                color: PHColor,
              }}
              rowTextStyle={{
                color: PHColor,
                fontSize: size(12),
                textAlign: 'left',
              }}
            />
          </View>

          <View //......................................................................Job Type...........................................................................................
            style={[
              {
                marginTop: size(20),
                height: size(35),
                width: '26%',
                marginLeft: '2%',
                backgroundColor: white,
              },
              styles.dropShadow,
            ]}>
            <SelectDropdown
              data={['Permanent', 'Probation']}
              defaultButtonText="Job Type"
              // selectedValue={values.leaveType}
              //   onValueChange={handleChange('leaveType')}
              //   onSelect={selectedItem =>
              // handleChange('leaveType')(selectedItem)
              //   }
              buttonTextAfterSelection={selectedItem => selectedItem}
              rowTextForSelection={item => item}
              buttonStyle={{
                backgroundColor: white,
                width: '100%',
                
                height: size(35),
              }}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={PHColor}
                    size={size(12)}
                  />
                );
              }}
              buttonTextStyle={{
                fontSize: size(12),
                color: orGray,
                textAlign: 'left',
                color: PHColor,
              }}
              rowTextStyle={{
                color: PHColor,
                fontSize: size(12),
                textAlign: 'left',
              }}
            />
          </View>

          <View //......................................................................Status...........................................................................................
            style={[
              {
                marginTop: size(20),
                height: size(35),
                width: '23%',
                marginLeft: '2%',
                backgroundColor: white,
              },
              styles.dropShadow,
            ]}>
            <SelectDropdown
              data={['working', 'on vaction', 'Terminate']}
              defaultButtonText="Status"
              // selectedValue={values.leaveType}
              //   onValueChange={handleChange('leaveType')}
              //   onSelect={selectedItem =>
              // handleChange('leaveType')(selectedItem)
              //   }
              buttonTextAfterSelection={selectedItem => selectedItem}
              rowTextForSelection={item => item}
              buttonStyle={{
                backgroundColor: white,
                width: '100%',
                marginLeft: '1%',
                height: size(35),
              }}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={PHColor}
                    size={size(12)}
                  />
                );
              }}
              buttonTextStyle={{
                fontSize: size(12),
                color: orGray,
                textAlign: 'left',
                color: PHColor,
              }}
              rowTextStyle={{
                color: PHColor,
                fontSize: size(12),
                textAlign: 'left',
              }}
            />
          </View>
        </View>
        <View style={{marginBottom: size(310), marginTop: size(10)}}>
          <FlatList
            data={List}
            renderItem={(
              {item}, //------------------------------------------------FlatList--------------------------------------------------
            ) => (
              <View
                style={[
                  {
                    width: '90%',
                    height: size(150),
                    backgroundColor: white,
                    alignSelf: 'center',
                    marginTop: size(10),
                    marginBottom:size(10)
                  },
                  styles.dropShadow,
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <View //...............................................................-..............image view ---------------------------------------------------
                    style={{
                      width: '15%',
                      height: size(80),
                      backgroundColor: 'green',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: size(100),
                      overflow: 'hidden',
                      marginTop: size(10),
                      marginLeft: '5%',
                    }}>
                    <Image
                      source={item.Image}
                      style={{width: '105%', height: size(100)}}
                    />
                  </View>
                  <View style={{marginLeft: '5%', marginTop: size(15),width:'75%'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: blue,
                        fontSize: size(18),
                        fontWeight: '800',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        marginLeft:'70%',
                        position:'absolute',
                        padding: size(5),
                        backgroundColor: StatusColor(item.Status),
                        color: white,
                        fontSize: size(12),
                        textAlign: 'center',
                        borderRadius: size(5),
                        fontWeight: '300',
                      }}>
                      {item.Status}
                    </Text>
                        </View>  
                    <Text style={{marginTop: size(5)}}># {item.id}</Text>
                    <View style={{flexDirection: 'row', marginTop: size(5)}}>
                      <Fontisto name={'email'} color={'#B4BBC3'} size={18} />
                      <Text style={{marginLeft: '5%'}}>{item.Email}</Text>
                    </View>
                  </View>
                  
                  
                 
                </View>
                <View
                  style={{
                    borderColor: gray,
                    width: '90%',
                    alignSelf: 'center',
                    borderTopWidth: size(1),
                    marginTop: size(15),
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: size(12),
                      fontWeight: '800',
                      padding: size(8),
                      textTransform: 'capitalize',
                    }}>
                    Job Type:
                  </Text>
                  <Text
                    style={{
                      fontSize: size(12),
                      marginTop: size(8),
                      marginLeft: '1%',
                      textTransform: 'capitalize',
                    }}>
                    {item.Job_type}
                  </Text>
                 <View style={{flexDirection:'row',marginLeft:'10%'}}>
                 <Text
                    style={{
                      fontSize: size(12),
                      fontWeight: '800',
                     
                      padding: size(3),
                      marginTop: size(8),
                      textTransform: 'capitalize',
                    }}>
                    Designations:
                  </Text>
                  <Text
                    style={{
                      fontSize: size(12),
                      marginTop: size(10),
                      marginLeft: '1%',
                    }}>
                    {item.Designations}
                  </Text>
                 </View>
                </View>
                <View
                  style={{
                    width: size(23),
                    height: size(20),
                    borderTopWidth: 2,
                    borderLeftWidth: 2,
                    position: 'absolute',
                    borderColor: StatusColor(item.Status),
                  }}
                />
                <View
                  style={{
                    marginLeft: '95%',
                    marginTop: size(128),
                    overflow: 'hidden',
                    width: size(20),
                    height: size(23),
                    borderBottomWidth: 2,
                    borderRightWidth: 2,
                    position: 'absolute',
                    borderColor: StatusColor(item.Status),
                    
                  }}
                />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
  },
});
