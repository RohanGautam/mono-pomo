import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { timerEmojiMap } from "@mono-pomo/common";

// const name :string = appName();
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>
        Open up App.tsx to start working on your app! The app is{" "}
        {timerEmojiMap["pomodoro"]}{" "}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 50,
  },
});
