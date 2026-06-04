import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { ThemeContext } from '../darkmode';

export default function HomeScreen({ navigation }) {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[styles.mainContainer,{backgroundColor: colors.background,flex: 1,},]}>
      <Text style={[styles.title, { color: colors.text }]}>Home</Text>

      <TouchableOpacity
        style={[styles.homeCard,{ backgroundColor: colors.button },]}
        onPress={() => navigation.navigate('EventsScreen')}>

        <Text style={[styles.cardText,{ color: colors.buttonText },]}>Events</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.homeCard,{ backgroundColor: colors.button },]}
        onPress={() => navigation.navigate('SettingScreen')}>
        <Text style={[styles.cardText,{ color: colors.buttonText },]}> Settings</Text>
      </TouchableOpacity>
    </View>
  );
}