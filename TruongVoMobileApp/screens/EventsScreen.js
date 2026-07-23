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
import { EventContext } from '../EventContext';

export default function EventsScreen() {
  const { colors } = useContext(ThemeContext);
  const { events } = useContext(EventContext);

  const [eventID, setEventID] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventInfo, setEventInfo] = useState('');
  const [search, setSearch] = useState('');

  const today = new Date() //This is pretty nice, when register an event, it will update the date to the lastest...
  .toISOString()
  .split('T')[0];
  const todaysEvents = events.filter(
    event => event.date === today
  );

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

      <Text style={[styles.sectionTitle,{color: colors.text,},]}> Today's Events</Text>

      {
        todaysEvents.length === 0 ? (<Text style={{ color: colors.text }}> No events today</Text>) : 
        (
          todaysEvents.map(event => (

            <View
              key={event.id}
              style={[styles.eventCard,{borderColor: colors.text,},]}>

              <Text style={{ color: colors.text }}> Event ID: {event.id}</Text>
              <Text style={{ color: colors.text }}> Event Name: {event.name}</Text>
              <Text style={{ color: colors.text }}> Event Info: {event.info}</Text>
              <Text style={{ color: colors.text }}> Date: {event.date}</Text>
            </View>
          ))
        )
      }

      <Text style={[styles.sectionTitle,{color: colors.text,},]}> All Events</Text>

      {
        events.map(event => (
          <View
            key={event.id}
            style={[styles.eventCard,{borderColor: colors.text,},]}>

            <Text style={{ color: colors.text }}> Event ID: {event.id}</Text>
            <Text style={{ color: colors.text }}> Event Name: {event.name}</Text>
            <Text style={{ color: colors.text }}> Event Info: {event.info}</Text>
            <Text style={{ color: colors.text }}> Date: {event.date}</Text>
          </View>
        ))
      }
    </ScrollView>
  );
}