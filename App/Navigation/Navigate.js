import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../Screens/Splash/Design';
import Login from '../Screens/Login/Design';
import HomeScreen from '../Screens/Home/Design';
import EmployeesList from '../Screens/EmployeesList/Design';
import LeaveRequest from '../Screens/LeaveRequest/Design';
import VoactionStructures from '../Screens/VoactionStructures/Design';
import Permissions from '../Screens/Permissions/Design';


export default function Navigate() {
  const Stack = createNativeStackNavigator();
  // const config ={
  //   animation: 'spring',
  //   config: {
  //     stiffness:1000,
  //     damping:50,
  //     mass:3,
  //     overshootClamping:false,
  //     restDisplacementThreshold:0.01,
  //     restSpeedThreshold: 0.01,
  //   }
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled:true,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Leave" component={LeaveRequest} />
        <Stack.Screen name="EmployeesList" component={EmployeesList} />
        <Stack.Screen name="VoactionStructures" component={VoactionStructures} />
        <Stack.Screen name="Permissions" component={Permissions} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
