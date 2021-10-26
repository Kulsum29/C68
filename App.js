import React from 'react';
import { createAppContainer } from 'react-navigation';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}>
        <TabNavigator.Screen name="Transaction" component={TransactionScreen} options= {{title:"Entry"}} />
        <TabNavigator.Screen name="Search" component={SearchScreen} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}

var TabNavigator = createBottomTabNavigator()

//const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
