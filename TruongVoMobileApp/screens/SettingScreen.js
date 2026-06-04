import React, { useContext, useState } from 'react';
import { View, Text, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from '../styles';
import { ThemeContext } from '../darkmode';

export default function SettingScreen() {
  const { isDarkMode, toggleTheme, colors } =
    useContext(ThemeContext);

  const [volumeEnabled, setVolumeEnabled] =
    useState(true);

  const [textSize, setTextSize] =
    useState(18);

  return (
    <View
      style={[styles.mainContainer,{backgroundColor: colors.background,flex: 1,},]}
    >
      <Text style={[styles.title,{color: colors.text,fontSize: textSize,},]}>Settings</Text>

      <View style={styles.settingRow}>
        <Text style={{color: colors.text,fontSize: textSize,}}>Dark Mode</Text>

        <Switch value={isDarkMode}onValueChange={toggleTheme}/>
      </View>

      <View style={styles.settingRow}>
        <Text style={{color: colors.text,fontSize: textSize,}}>Volume</Text>

        <Switch value={volumeEnabled}onValueChange={setVolumeEnabled}/>
      </View>

      <View style={{width: '90%',marginTop: 20,}}>
        <Text style={{color: colors.text,fontSize: textSize,}}>Text Size</Text>

        <Slider
          minimumValue={12}
          maximumValue={30}
          value={textSize}
          onValueChange={setTextSize}
        />
      </View>
    </View>
  );
}