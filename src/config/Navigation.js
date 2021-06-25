import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';

const LoginStack = createStackNavigator();
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
    </LoginStack.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}
      mode="modal">
      <RootStack.Screen name="LoginStack" component={LoginStackScreen} />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
