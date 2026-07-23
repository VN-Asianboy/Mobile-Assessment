import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';
import { ThemeContext } from '../darkmode';

export default function RegisterScreen() {
  const { colors } = useContext(ThemeContext);

  const [eventID, setEventID] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventInfo, setEventInfo] = useState('');

  return (
    <View
      style={[styles.mainContainer,{backgroundColor: colors.background, flex: 1,},]}
    >
      <Text style={[styles.title,{color: colors.text,},]}>Register Event</Text>

      <Text style={[styles.label,{ color: colors.text }]}>Event ID</Text>

      <TextInput
        style={[styles.input,{borderColor: colors.text, color: colors.text,},]}
        value={eventID}
        onChangeText={setEventID}
      />

      <Text style={[styles.label,{ color: colors.text }]}>Event Name</Text>

      <TextInput
        style={[styles.input,{borderColor: colors.text, color: colors.text,},]}
        value={eventName}
        onChangeText={setEventName}
      />

      <Text style={[styles.label,{ color: colors.text }]}>Event Info</Text>

      <TextInput
        style={[styles.input,{borderColor: colors.text, color: colors.text,},]}
        value={eventInfo}
        onChangeText={setEventInfo}
      />

      <TouchableOpacity
        style={[styles.registerButton,{backgroundColor: colors.button,},]}>
        <Text style={[styles.buttonText,{color: colors.buttonText,},]}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}