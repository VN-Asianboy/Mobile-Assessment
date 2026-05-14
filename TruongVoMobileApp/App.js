import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AnotherPage from './screens/AnotherPage';
import YetAnotherPage from './screens/YetAnotherPage';
import { ThemeProvider, ThemeContext } from './darkmode';

const Stack = createStackNavigator();

function AppNavigator() {
  const { colors } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.header },
          headerTitleStyle: { color: colors.headerTitle },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AnotherPage" component={AnotherPage} />
        <Stack.Screen name="YetAnotherPage" component={YetAnotherPage} />
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