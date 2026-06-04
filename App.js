import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#020912',
    card: '#020912',
    text: '#FFFFFF',
    border: '#020912',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <StatusBar style="light" backgroundColor="#020912" />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#020912',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Messages"
          component={MessageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}