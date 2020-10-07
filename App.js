import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import Classes from "./component/classes";
import History from "./component/history";
import Schedule from "./component/schedule";
import Stats from "./component/stats";

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: "#000033" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            marginBottom: 50,
            fontWeight: "bold",
            top: 30,
          }}
        >
          VLSl Design
        </Text>
      </View>
      <Classes />
      <Stats />
      <History />
      <Schedule />
    </ScrollView>
  );
}
