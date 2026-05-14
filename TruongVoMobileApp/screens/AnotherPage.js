import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function AnotherPage({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Another Page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('YetAnotherPage')}>
        <Text style={styles.buttonText}>Go to YetAnotherPage</Text>
      </TouchableOpacity>
    </View>
  );
}
