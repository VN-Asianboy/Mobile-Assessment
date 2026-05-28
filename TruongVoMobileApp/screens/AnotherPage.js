import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import styles from '../styles';
import { ThemeContext } from '../darkmode';

export default function AnotherPage({ navigation }) {
  const { isDarkMode, toggleTheme, colors } = useContext(ThemeContext);

  return (
    <View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Another Page</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.button }]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.button }]}
        onPress={() => navigation.navigate('YetAnotherPage')}>
        <Text style={styles.buttonText}>Go to YetAnotherPage</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: colors.text, fontSize: 16, marginRight: 10 }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}
