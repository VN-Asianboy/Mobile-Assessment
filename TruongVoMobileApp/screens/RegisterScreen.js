import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { EventContext } from '../EventContext';

import styles from '../styles';
import { ThemeContext } from '../darkmode';

export default function RegisterScreen() {
  const { colors } = useContext(ThemeContext);
  const { addEvent } = useContext(EventContext);

  const [eventID, setEventID] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventInfo, setEventInfo] = useState('');

  const registerEvent = () => {
  const newEvent = {
    id: eventID,
    name: eventName,
    info: eventInfo,
    date: new Date().toISOString().split('T')[0],
  };

  addEvent(newEvent);

  setEventID('');
  setEventName('');
  setEventInfo('');
  };


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
        style={[styles.registerButton,{backgroundColor: colors.button,},]} onPress={registerEvent}>
        <Text style={[styles.buttonText,{color: colors.buttonText,},]}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}