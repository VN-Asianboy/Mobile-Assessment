import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import styles from '../styles';
import { ThemeContext } from '../darkmode';

export default function HomeScreen({ navigation }) {
  const { isDarkMode, toggleTheme, colors } = useContext(ThemeContext);

  return (
    <View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Bare Template</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.button }]}
        onPress={() => navigation.navigate('AnotherPage')}
      >
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>
          Go to Another Page
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.button }]}
        onPress={() => navigation.navigate('YetAnotherPage')}
      >
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>
          Go to Yet Another Page
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: colors.text, fontSize: 16, marginRight: 10 }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}