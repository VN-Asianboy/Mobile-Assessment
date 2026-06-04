import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styles';
import { ThemeContext } from '../darkmode';

export default function EventsScreen() {
  const { colors } = useContext(ThemeContext);

  const [eventID, setEventID] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventInfo, setEventInfo] = useState('');
  const [search, setSearch] = useState('');

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={{alignItems: 'center',paddingVertical: 20,}}>

      <Text style={[styles.title, { color: colors.text }]}>Events</Text>

      <Text style={[styles.label, { color: colors.text }]}>Event ID</Text>
      <TextInput
        style={[styles.input,{borderColor: colors.text,color: colors.text,},]}
        value={eventID}
        onChangeText={setEventID}
      />

      <Text style={[styles.label, { color: colors.text }]}>Event Name</Text>
      <TextInput
        style={[styles.input,{borderColor: colors.text,color: colors.text,},]}
        value={eventName}
        onChangeText={setEventName}
      />

      <Text style={[styles.label, { color: colors.text }]}>Event Info</Text>
      <TextInput
        style={[styles.input,{borderColor: colors.text,color: colors.text,},]}
        value={eventInfo}
        onChangeText={setEventInfo}
      />

      <TouchableOpacity
        style={[styles.registerButton,{ backgroundColor: colors.button },]}>
        <Text style={[styles.buttonText,{ color: colors.buttonText },]}>Register</Text>
      </TouchableOpacity>

      <Text style={[styles.sectionTitle,{ color: colors.text },]}>Search Event</Text>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="gray"
        style={[styles.input,{borderColor: colors.text,color: colors.text,},]}
        value={search}
        onChangeText={setSearch}
      />

      <Text style={[styles.sectionTitle,{ color: colors.text },]}>Registered Events</Text>
      <View
        style={[styles.eventCard,{ borderColor: colors.text },]}>
        <Text style={{ color: colors.text }}>Event ID: 001</Text>

        <Text style={{ color: colors.text }}>Event Name: Sample Event</Text>

        <Text style={{ color: colors.text }}>Event Info: Example Information</Text>
      </View>
    </ScrollView>
  );
}