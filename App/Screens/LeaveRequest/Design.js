import React, {useState,useEffect, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  useFocusEffect
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../../Components/Header';
import {PHColor, blue, gray, orGray, white} from '../../Helpers/Color';
import {size} from '../../Helpers/sizeHelper/devices';
import LeavesList from '../../Source/Data/LeavesList';
export default function Design({}) {
  const [checked, setChecked] = useState('false');
  const [isResponce, setIsResponce] = useState();
  const [Index,setIndex] = useState();


  // const View1 = useRef(new Animated.Value(1)).current;

  // const StartAnimated = () => {
  //   Animated.timing(View1, {
  //     toValue: 0,
  //     duration: 1000*(Index+1),
  //     useNativeDriver: true,
  //   }).start();};

  // const ApidataGet = async () => {
  //   try {
  //     const url="http://192.168.30.131:3000/Leave"
  //   let resopnce = await fetch(url);
  //    resopnce = await resopnce.json();
  //    setIsResponce(resopnce);
  //   console.log(resopnce,"success.................");
  //   console.log(isResponce,'------------------------');
  //   if(resopnce){
  //     console.log(isResponce);
  //   }
    
  //   } catch (error) {
  //     console.log("Something went wrong", error);
  //   }
    
  // };
  const StatusColor = Status => {
    switch (Status) {
      case 'Approved':
        return '#55CF8D';
        break;
      case 'Pending':
        return '#F9B633';
        break;
      case 'Rejected':
        return '#F70068';
        break;
      default:
        return gray;
        break;
    }
    
  };
  let statements;
  const ApprovedLine = Status => {
    switch (Status) {
      case 'Approved':
        return (statements = (
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: size(14),
                fontWeight: '700',
                padding: size(8),
                textTransform: 'capitalize',
                alignSelf: 'center',
              }}>
              Approved By:
            </Text>
            <Text style={{alignSelf: 'center'}}>Admin</Text>
          </View>
        ));

        break;
      case 'Pending':
        return (statements = (
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: size(14),
                fontWeight: '700',
                padding: size(8),
                textTransform: 'capitalize',
                alignSelf: 'center',
              }}>
              Approved By:
            </Text>
            <SelectDropdown
              data={['Manager', 'Admin']}
              defaultButtonText="Select"
              // selectedValue={values.leaveType}
              //   onValueChange={handleChange('leaveType')}
              //   onSelect={selectedItem =>
              // handleChange('leaveType')(selectedItem)
              //   }
              buttonTextAfterSelection={selectedItem => selectedItem}
              rowTextForSelection={item => item}
              buttonStyle={{
                backgroundColor: white,
                width: '35%',
                marginLeft: '3%',
                height: size(30),
                borderWidth: size(1),
                borderRadius: size(5),
                marginTop: size(8),
              }}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={PHColor}
                    size={size(10)}
                  />
                );
              }}
              buttonTextStyle={{
                fontSize: size(10),
                color: orGray,
                textAlign: 'left',
                color: PHColor,
                
              }}
              rowTextStyle={{
                color: PHColor,
                fontSize: size(11),
                textAlign: 'left',
                
              }}
            />
            <TouchableOpacity >
              <FontAwesome
                name={'save'}
                color={white}
                size={size(20)}
                style={{
                  padding: size(5),
                  backgroundColor: '#55CF8D',
                  marginTop: size(8),
                  borderRadius: size(5),
                }}
              />
            </TouchableOpacity>
          </View>
        ));

        break;
      case 'Rejected':
        return;
        break;
      default:
        return gray;
        break;
    }
  };
  // useEffect(() => {
   
  //    // StartAnimated();
    
  //  // ApidataGet();
    
  // },[]);

  return (
    <View>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#394ECA" />
        <Header label={'Leave Requests'} />

        <View style={{flexDirection: 'row', marginBottom: size(8)}}>
          <View //......................................................................Approvied By................................................................................................
            style={[
              {
                marginTop: size(15),
                height: size(35),
                width: '58%',
                marginLeft: '5%',
                backgroundColor: white,
              },
              styles.dropShadow,
            ]}>
            <SelectDropdown
              data={['Manager', 'Team Leave', 'Admin']}
              defaultButtonText="Approved By"
              // selectedValue={values.leaveType}
              //   onValueChange={handleChange('leaveType')}
              //   onSelect={selectedItem =>
              // handleChange('leaveType')(selectedItem)
              //   }
              buttonTextAfterSelection={selectedItem => selectedItem}
              rowTextForSelection={item => item}
              buttonStyle={{
                backgroundColor: white,
                width: '98%',
                marginLeft: '3%',
                height: size(35),
              }}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={PHColor}
                    size={size(14)}
                  />
                );
              }}
              buttonTextStyle={{
                fontSize: size(14),
                color: orGray,
                textAlign: 'left',
                color: PHColor,
              }}
              rowTextStyle={{
                color: PHColor,
                fontSize: size(14),
                textAlign: 'left',
              }}
            />
          </View>
          <View //......................................................................Status...........................................................................................
            style={[
              {
                marginTop: size(15),
                height: size(35),
                width: '30%',
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
                width: '98%',
                marginLeft: '3%',
                height: size(35),
              }}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={PHColor}
                    size={size(14)}
                  />
                );
              }}
              buttonTextStyle={{
                fontSize: size(14),
                color: orGray,
                textAlign: 'left',
                color: PHColor,
              }}
              rowTextStyle={{
                color: PHColor,
                fontSize: size(14),
                textAlign: 'left',
              }}
            />
          </View>
        </View>

        <View style={{marginBottom: size(290)}}>
          <FlatList
            data={LeavesList}
            renderItem={({item,index}) => (
              
              <View
                style={[
                  {
                    width: '90%',
                    height: size(150),
                    backgroundColor: white,
                    alignSelf: 'center',
                    marginTop: size(5),
                    marginBottom: size(10),
                  },
                  styles.dropShadow]}
                  // {
                  //   transform: [
                  //     {
                  //       translateY: View1.interpolate({
                  //         inputRange: [0, 1],
                  //         outputRange: [1, -500],
                  //       }),
                  //     },
                  //     {
                  //       scale: View1.interpolate({
                  //         inputRange: [0, 1],
                  //         outputRange: [1, 0.1],
                  //       }),
                  //     }
                  //   ]
                  // }
                >
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      marginLeft: '5%',
                      marginTop: size(15),
                      width: '90%',
                      overflow: 'hidden',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: blue,
                          fontSize: size(18),
                          fontWeight: '800',
                        }}>
                        {item.name}
                      </Text>
                      <Text style={{marginTop: size(5), fontSize: size(11)}}>
                        {' '}
                        {'\t'} # {item.id}
                      </Text>
                      <Text
                      style={{
                        marginLeft:'82%',
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
                    <View style={{flexDirection: 'row', marginTop: size(5)}}>
                      <Text
                        style={{
                          marginLeft: '1%',
                          fontSize: size(11),
                          fontWeight: '700',
                        }}>
                        Request:
                      </Text>
                      <Text style={{marginLeft: '1%', fontSize: size(10)}}>
                        {item.Request}
                      </Text>
                      <Text
                        style={{
                          position:'absolute',
                          marginLeft: '65%',
                         
                          fontSize: size(11),
                          fontWeight: '700',
                          
                        }}>
                        Policy:
                      </Text>
                      <Text style={{position:'absolute',marginLeft: '77%', fontSize: size(10)}}>
                        {item.Policy}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: size(5)}}>
                      <Text
                        style={{
                          marginLeft: '1%',
                          fontSize: size(11),
                          fontWeight: '700',
                        }}>
                        Reason:
                      </Text>
                      <Text style={{marginLeft: '1%', fontSize: size(9)}}>
                        {item.Reasons}
                      </Text>
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
                  {ApprovedLine(item.Status)}
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      marginLeft: '75%',
                    }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: size(12),
                          fontWeight: '500',
                          padding: size(3),
                          marginTop: size(8),
                          textTransform: 'capitalize',
                          color: '#F70068',
                        }}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: size(12),
                          fontWeight: '500',
                          marginLeft: '5%',
                          padding: size(3),
                          marginTop: size(8),
                          textTransform: 'capitalize',
                          color: blue,
                        }}>
                        Reject
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={[{ borderColor: StatusColor(item.Status),},styles.TopCorner]}
                />
                <View
                  style={[{
                    borderColor: StatusColor(item.Status),
                  },styles.BottomCorner]}
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
  TopCorner: {
    width: size(23),
    height: size(20),
    borderTopWidth: 2,
    borderLeftWidth: 2,
    position: 'absolute',
  },
  BottomCorner:{
    marginLeft: '95%',
    marginTop: size(128),
    overflow: 'hidden',
    width: size(20),
    height: size(23),
    borderBottomWidth: 2,
    borderRightWidth: 2,
    position: 'absolute',
  },
});
