import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import WishListScreen from '../screens/WishListScreen';
import AddBookScreen from '../screens/AddBookScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

import Header from '../components/Layout/Header';

const LoginStack = createStackNavigator();
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
    </LoginStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Library"
        component={HomeScreen}
        options={{
          title: 'Library',
          header: props => <Header {...props} />,
        }}
      />
      <HomeStack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{
          title: 'BookDetail',
          header: props => <Header {...props} />,
        }}
      />
    </HomeStack.Navigator>
  );
};

const WishListStack = createStackNavigator();
const WishListStackScreen = () => {
  return (
    <WishListStack.Navigator>
      <WishListStack.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          title: 'WishList',
          header: props => <Header {...props} />,
        }}
      />
    </WishListStack.Navigator>
  );
};

const AddBookStack = createStackNavigator();
const AddBookStackScreen = () => {
  return (
    <AddBookStack.Navigator>
      <AddBookStack.Screen
        name="AddBook"
        component={AddBookScreen}
        options={{
          title: 'AddBook',
          header: props => <Header {...props} />,
        }}
      />
    </AddBookStack.Navigator>
  );
};

const TabStack = createBottomTabNavigator();
const TabStackScreen = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{title: 'Home'}}
      />
      <TabStack.Screen
        name="WishList"
        component={WishListStackScreen}
        options={{title: 'WishList'}}
      />
      <TabStack.Screen
        name="AddBook"
        component={AddBookStackScreen}
        options={{title: 'AddBook'}}
      />
    </TabStack.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}
      mode="modal">
      {user ? (
        <RootStack.Screen name="HomeStack" component={TabStackScreen} />
      ) : (
        <RootStack.Screen name="LoginStack" component={LoginStackScreen} />
      )}
    </RootStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigation;
