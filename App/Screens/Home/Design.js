import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef,useState} from 'react';
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../Components/Header';
import {white} from '../../Helpers/Color';
import {size} from '../../Helpers/sizeHelper/devices';
import List from '../../Source/Data/FlatList';
import Vacations from '../../Source/Data/Vocations';

export default function Design({navigation}) {
  const View1 = useRef(new Animated.Value(1)).current;
  const View2 = useRef(new Animated.Value(1)).current;
  const View3 = useRef(new Animated.Value(1)).current;
  const View4 = useRef(new Animated.Value(1)).current;
  const [empList,setEmpList] = useState(0);
  const [vacationsList,setVacationsList] = useState(0);
  const isFocused = useIsFocused();

  const startAminmation = () => {
    Animated.timing(View1, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(View2, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(View3, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(View4, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setEmpList(List.length);
    setVacationsList(Vacations.length);
    if (isFocused) {
      startAminmation();
      console.log('isFocused Home Screen', isFocused);
    } else {
      console.log('isFocused  Home Screen', isFocused);
    }
    return () => {
      View1.setValue(1);
      View2.setValue(1);
      View3.setValue(1);
      View4.setValue(1);
    };
  }, [isFocused]);






  const createInvoiceStyle = async (url) => {

    // let url = qrRef.current.toDataURL();
    let pageSize = "42"

    let a = "a"
    const base64Image = "data:image/png;base64," + url;
    console.log("create Invoice Style cal..", base64Image)
    let proTax = 0, prodDis = 0;
    let printing = new EscPosPrinter.printing();
    const encoder = new Encoder();
    let currentDate = moment().format('DD/MM/YYYY HH:mm:ss');
    switch (pageSize) {

      case "36":

        selectedProducts.forEach((product) => {
          console.log("printing............selectedProducts", product.DiscountAmount)
          product.DiscountAmount = product.DiscountAmount === "0.00" ? 0 : product.DiscountAmount
          proTax = proTax + product.tax
          prodDis = prodDis + product.DiscountAmount

          let w = product.ProductName.split(" ")

          let whiteSpaceName = "";
          if (w[w.length - 1].length < 12) {
            whiteSpaceName = "            "
            // console.log("whiteSpace before trim", whiteSpaceName.length)
            whiteSpaceName = whiteSpaceName.slice(w[w.length - 1].length, whiteSpaceName.length)
            // console.log("whiteSpace after trim", whiteSpaceName.length)
          }

          encoder
            .initialize()
            .size(1, 2)
            .text(String(product.ProductName), 1)
            .size(1, 2)
            .text(whiteSpaceName + String(product.PriceOriginal),)
            .size(1, 2)
            .text("    " + String(product.Quantity),)
            .size(1, 2)
            .text("      " + String(product.FreeProduct ? "0.00" : (product.GrandAmount).toFixed(TerminalConfiguration.DecimalsInAmount)))
            .newline(0.5)

        });
        printing.initialize()
          .align('center')
          .size(2, 1)
          .line(currentDate)
          .smooth(false)
          .size(1, 1)
          .line("******************************************")
          .align('left')
          .bold()
          .line(String(terminalSetup.StartFrom))
          .align('center')
          .size(2)
          .bold()
          .underline()
          .line(invoiceNumber)
          .align('center')
          .barcode({
            value: invoiceNumber,
            type: 'EPOS2_BARCODE_CODE93',
            width: 2,
            height: 50,
            hri: 'EPOS2_HRI_BELOW',
          })
          .underline(false)
          .newline()
          .data(encoder.encode())
          .size(1, 1)
          .align("center")
          .line("********************")
          .align("left")
          .bold(false)
          .text("Sub Amount" + "                " + String(subPrice - prodDis - proTax))//15
          .newline(0.5)
          .text("Tax" + "                       " + String(globalTax + proTax))//15
          .newline(0.5)
          .text("Discount" + "                  " + String(globalDiscountAmount + prodDis))//15
          .newline(0.5)
          .bold()
          .text("Total Price" + "               " + String(totalPrice))//15
          .newline()
          .bold(false)
          .align("center")
          .line("********************")
          .newline()
          .align("left")
          .bold(false)
          .text("Sale type" + "   " + "Sales Agent" + "   " + "Terminal") //4
          .newline(0.5)
          .line("Cash" + "         " + String(selectedAgent?.SalesAgentName ? selectedAgent?.SalesAgentName : TerminalConfiguration?.SalesAgentName) + "       " + String(TerminalConfiguration?.TerminalCode)) //9
          .align('center')
          .line("********************")
          .newline(2)
          .align('center')
          .image({
            uri:
              base64Image
          },
            { width: 255, height: 255 })
        break;
      case "42":
        selectedProducts.forEach((product) => {

          product.DiscountAmount = product.DiscountAmount === "0.00" ? 0 : product.DiscountAmount
          proTax = proTax + product.tax
          prodDis = prodDis + product.DiscountAmount

          // console.log("printing............selectedProducts", product.ProductName.length,)

          let w = product.ProductName.split(" ")

          let whiteSpaceName = "";
          if (w[w.length - 1].length < 15) {
            whiteSpaceName = "               "
            // console.log("whiteSpace before trim", whiteSpaceName.length)
            whiteSpaceName = whiteSpaceName.slice(w[w.length - 1].length, whiteSpaceName.length)
            // console.log("whiteSpace after trim", whiteSpaceName.length)
          }
          let priceSpace = "          "

          priceSpace = priceSpace.slice(String(product.PriceOriginal).length, priceSpace.length)
          let quantitySpace = "          "

          quantitySpace = quantitySpace.slice(String(product.Quantity).length, quantitySpace.length)

          console.log("printing............selectedProducts", product.PriceOriginal.length, priceSpace, product.Quantity.length, quantitySpace)
          encoder
            .initialize()
            .size(1, 2)
            .text(String(product.ProductName), 1)
            .size(1, 2)
            .text(whiteSpaceName + String(product.PriceOriginal),)
            .size(1, 2)
            .text(priceSpace + String(product.Quantity),)
            .size(1, 2)
            .text(quantitySpace + String(product.FreeProduct ? "0.00" : (product.GrandAmount).toFixed(TerminalConfiguration.DecimalsInAmount)))
            .newline(0.5)

        });
        printing.initialize()
          .align('center')
          .size(2, 1)
          .line(currentDate)
          .smooth(false)
          .size(1, 1)
          .line("******************************************")
          .align('left')
          .bold()
          .line(String(terminalSetup.StartFrom))
          .align('center')
          .size(2)
          .bold()
          .underline()
          .line(invoiceNumber)
          .align('center')
          .barcode({
            value: invoiceNumber,
            type: 'EPOS2_BARCODE_CODE93',
            width: 2,
            height: 50,
            hri: 'EPOS2_HRI_BELOW',
          })
          .underline(false)
          .newline()

          .data(encoder.encode())
          .size(1, 1)
          .align("center")
          .line("********************")
          .align("left")
          .bold(false)
          .text("Sub Amount" + "                       " + String(Number(subPrice - prodDis - proTax).toFixed(TerminalConfiguration.DecimalsInAmount)))//25
          .newline(0.5)
          .text("Tax" + "                              " + String(Number(globalTax + proTax).toFixed(TerminalConfiguration.DecimalsInAmount)))//25
          .newline(0.5)
          .text("Discount" + "                         " + String(Number(globalDiscountAmount + prodDis).toFixed(TerminalConfiguration.DecimalsInAmount)))//25
          .newline(0.5)
          .bold()
          .text("Total Price" + "                      " + String(Number(totalPrice).toFixed(TerminalConfiguration.DecimalsInAmount)))//25
          .newline()
          .bold(false)
          .align("center")
          .line("********************")
          .newline()
          .align("left")
          .bold(false)
          .text("Sale type" + "         " + "Sales Agent" + "         " + "Terminal") //9
          .newline(0.5)
          .line(selectedPyamentMethod.PaymentTypeName + "              " + String(selectedAgent?.SalesAgentName ? selectedAgent?.SalesAgentName : TerminalConfiguration?.SalesAgentName) + "           " + String(TerminalConfiguration?.TerminalCode)) //9
          .align('center')
          .line("********************")
          .newline(2)
          .align('center')
          .image({
            uri:
              base64Image
          },
            { width: 255, height: 255 })
        const status = await printing.cut().send();
        break;
      default:
        selectedProducts.forEach((product) => {

          product.DiscountAmount = product.DiscountAmount === "0.00" ? 0 : product.DiscountAmount
          proTax = proTax + product.tax
          prodDis = prodDis + product.DiscountAmount

          // console.log("printing............selectedProducts", product.ProductName.length,)

          let w = product.ProductName.split(" ")

          let whiteSpaceName = "";
          if (w[w.length - 1].length < 15) {
            whiteSpaceName = "               "
            // console.log("whiteSpace before trim", whiteSpaceName.length)
            whiteSpaceName = whiteSpaceName.slice(w[w.length - 1].length, whiteSpaceName.length)
            // console.log("whiteSpace after trim", whiteSpaceName.length)
          }
          let priceSpace = "          "

          priceSpace = priceSpace.slice(String(product.PriceOriginal).length, priceSpace.length)
          let quantitySpace = "          "

          quantitySpace = quantitySpace.slice(String(product.Quantity).length, quantitySpace.length)

          console.log("printing............selectedProducts", product.PriceOriginal.length, priceSpace, product.Quantity.length, quantitySpace)
          encoder
            .initialize()
            .size(1, 2)
            .text(String(product.ProductName), 1)
            .size(1, 2)
            .text(whiteSpaceName + String(product.PriceOriginal),)
            .size(1, 2)
            .text(priceSpace + String(product.Quantity),)
            .size(1, 2)
            .text(quantitySpace + String(product.FreeProduct ? "0.00" : (product.GrandAmount).toFixed(TerminalConfiguration.DecimalsInAmount)))
            .newline(0.5)

        });
        printing.initialize()
          .align('center')
          .size(2, 1)
          .line(currentDate)
          .smooth(false)
          .size(1, 1)
          .line("******************************************")
          .align('left')
          .bold()
          .line(String(terminalSetup.StartFrom))
          .align('center')
          .size(2)
          .bold()
          .underline()
          .line(invoiceNumber)
          .align('center')
          .barcode({
            value: invoiceNumber,
            type: 'EPOS2_BARCODE_CODE93',
            width: 2,
            height: 50,
            hri: 'EPOS2_HRI_BELOW',
          })
          .underline(false)
          .newline()

          .data(encoder.encode())
          .size(1, 1)
          .align("center")
          .line("********************")
          .align("left")
          .bold(false)
          .text("Sub Amount" + "                       " + String(Number(subPrice - prodDis - proTax).toFixed(TerminalConfiguration.DecimalsInAmount)))//25
          .newline(0.5)
          .text("Tax" + "                              " + String(Number(globalTax + proTax).toFixed(TerminalConfiguration.DecimalsInAmount)))//25
          .newline(0.5)
          .text("Discount" + "                         " + String(Number(globalDiscountAmount + prodDis).toFixed(TerminalConfiguration.DecimalsInAmount)))//25
          .newline(0.5)
          .bold()
          .text("Total Price" + "                      " + String(Number(totalPrice).toFixed(TerminalConfiguration.DecimalsInAmount)))//25
          .newline()
          .bold(false)
          .align("center")
          .line("********************")
          .newline()
          .align("left")
          .bold(false)
          .text("Sale type" + "         " + "Sales Agent" + "         " + "Terminal") //9
          .newline(0.5)
          .line(selectedPyamentMethod.PaymentTypeName + "              " + String(selectedAgent?.SalesAgentName ? selectedAgent?.SalesAgentName : TerminalConfiguration?.SalesAgentName) + "           " + String(TerminalConfiguration?.TerminalCode)) //9
          .align('center')
          .line("********************")
          .newline(2)
          .align('center')
          .image({
            uri:
              base64Image
          },
            { width: 255, height: 255 })
        const a = await printing.cut().send();
        break;
    }
    console.log("kjhkashdkh", subPrice, prodDis, proTax)

  }












  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#394ECA" />

      <Header />
      <Animated.View
        style={[
          {},
          {
            transform: [
              {
                translateY: View1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 500],
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EmployeesList');
          }}
          style={[
            {
              width: '90%',
              height: size(110),
              alignSelf: 'center',
              marginTop: size(10),
              flexDirection: 'row',
              backgroundColor: white,
            },
            styles.dropShadow,
          ]}>
          <View
            style={{
              backgroundColor: '#783EF2',
              width: '20%',
              height: size(90),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: size(10),
              marginLeft: '3%',
              marginTop: size(10),
            }}>
            <Image
              source={require('../../Source/Images/Employee.png')}
              style={{width: size(40), height: size(50), alignItems: 'center'}}
            />
          </View>
          <View style={{marginLeft: '5%'}}>
            <Text
              style={{
                color: '#783EF2',
                fontSize: size(20),
                fontWeight: 'bold',
                marginTop: size(30),
              }}>
              Employees List
            </Text>
            <Text
              style={{
                fontSize: size(12),
                marginLeft: '3%',
                marginTop: size(5),
              }}>
              {empList}
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          {},
          {
            transform: [
              {
                translateY: View2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 500],
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('VoactionStructures');
          }}
          style={[
            {
              width: '90%',
              height: size(110),
              alignSelf: 'center',
              marginTop: size(10),
              flexDirection: 'row',
              backgroundColor: white,
            },
            styles.dropShadow,
          ]}>
          <View
            style={{
              backgroundColor: '#52C5FB',
              width: '20%',
              height: size(90),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: size(10),
              marginLeft: '3%',
              marginTop: size(10),
            }}>
            <Image
              source={require('../../Source/Images/Vacation.png')}
              style={{width: size(50), height: size(50), alignItems: 'center'}}
            />
          </View>
          <View style={{marginLeft: '5%'}}>
            <Text
              style={{
                color: '#52C5FB',
                fontSize: size(20),
                fontWeight: 'bold',
                marginTop: size(30),
              }}>
              Vacation Structures
            </Text>
            <Text
              style={{
                fontSize: size(12),
                marginLeft: '3%',
                marginTop: size(5),
              }}>
              {vacationsList}
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          {},
          {
            transform: [
              {
                translateY: View3.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 500],
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Leave');
          }}
          style={[
            {
              width: '90%',
              height: size(110),
              alignSelf: 'center',
              marginTop: size(10),
              flexDirection: 'row',
              backgroundColor: white,
            },
            styles.dropShadow,
          ]}>
          <View
            style={{
              backgroundColor: '#62E6C3',
              width: '20%',
              height: size(90),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: size(10),
              marginLeft: '3%',
              marginTop: size(10),
            }}>
            <Image
              source={require('../../Source/Images/Leave.png')}
              style={{width: size(65), height: size(47), alignItems: 'center'}}
            />
          </View>
          <View style={{marginLeft: '5%'}}>
            <Text
              style={{
                color: '#62E6C3',
                fontSize: size(20),
                fontWeight: 'bold',
                marginTop: size(30),
              }}>
              Leave Requests
            </Text>
            <Text
              style={{
                fontSize: size(12),
                marginLeft: '3%',
                marginTop: size(5),
              }}>
              Leave request handling by manager
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          {},
          {
            transform: [
              {
                translateY: View4.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 500],
                }),
              },
              {
                scale: View4.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.1],
                }),
              },
            ],
          },
        ]}>
        <TouchableOpacity
          style={[
            {
              width: '90%',
              height: size(110),
              alignSelf: 'center',
              marginTop: size(10),
              flexDirection: 'row',
              backgroundColor: white,
            },
            styles.dropShadow,
          ]}
          onPress={() => {
            navigation.navigate('Permissions');
          }}>
          <View
            style={{
              backgroundColor: '#F70068',
              width: '20%',
              height: size(90),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: size(10),
              marginLeft: '3%',
              marginTop: size(10),
            }}>
            <Image
              source={require('../../Source/Images/Permissions.png')}
              style={{width: size(50), height: size(50), alignItems: 'center'}}
            />
          </View>
          <View style={{marginLeft: '5%'}}>
            <Text
              style={{
                color: '#F70068',
                fontSize: size(20),
                fontWeight: 'bold',
                marginTop: size(30),
              }}>
              Permissions
            </Text>
            <Text
              style={{
                fontSize: size(12),
                marginLeft: '3%',
                marginTop: size(5),
              }}>
              Choose the permission for employees
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      
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
