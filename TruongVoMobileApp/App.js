import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import SettingScreen from './screens/SettingScreen';
import RegisterScreen from './screens/RegisterScreen';

import { ThemeProvider, ThemeContext } from './darkmode';

const Stack = createStackNavigator();

function AppNavigator() {
  const { colors } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.header,
          },
          headerTitleStyle: {
            color: colors.headerTitle,
          },
          headerTintColor: colors.headerTitle,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventsScreen" component={EventsScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}