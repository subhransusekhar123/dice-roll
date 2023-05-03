/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
  TouchableOpacity
} from 'react-native';
import { trigger } from "react-native-haptic-feedback";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";




import Dice1 from "./asset/inverted-dice-1.png";
import Dice2 from "./asset/inverted-dice-2.png";
import Dice3 from "./asset/inverted-dice-3.png";
import Dice4 from "./asset/inverted-dice-4.png";
import Dice5 from "./asset/inverted-dice-5.png";
import Dice6 from "./asset/inverted-dice-6.png";

const App = () => {
  const [number, setNumber] = React.useState(1);
  const [dice, setDice] = React.useState(Dice1);

  //triggger
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const changeHandler = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    setNumber(randomNumber);
    console.log(randomNumber)
    switch (number) {
      case 1:
        setDice(Dice1)
        break;
      case 2:
        setDice(Dice2)
        break;
      case 3:
        setDice(Dice3)
        break
      case 4:
        setDice(Dice4)
        break
      case 5:
        setDice(Dice5)
        break
      case 6:
        setDice(Dice6)
        break
      default:
        setDice(Dice1)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactMedium", options);
  }


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 8, backgroundColor: "#fab1a0" }}>
      <Image source={dice} style={{ width: 150, height: 150, borderRadius: 12 }} />
      <Pressable style={{ padding: 10, borderRadius: 8, elevation: 6, borderWidth: 2, borderColor: "white", backgroundColor: "#d63031" }} onPress={changeHandler}>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>Change The Dice</Text>
      </Pressable>
    </View>
  )
}

export default App;