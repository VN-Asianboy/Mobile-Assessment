import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function YetAnotherPage({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Yet Another Page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AnotherPage')}>
        <Text style={styles.buttonText}>Go to Another Page</Text>
      </TouchableOpacity>
    </View>
  );
}