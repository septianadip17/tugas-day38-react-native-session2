import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleButton = () => {
    navigation.navigate('Profile')
  }
  return (
    <View>
      <Text>Ini Home</Text>
      <Button title="Go To Profile" onPress={handleButton}/>
    </View>
  )
}

export default HomeScreen;