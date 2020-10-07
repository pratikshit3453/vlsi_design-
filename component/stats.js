import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Header, Content, Button, Input } from "native-base";
import { VictoryPie, VictoryLabel } from "victory-native";

export default class Stats extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffdd99",
          borderRadius: 25,
          width: "90%",
          padding: 20,
          marginLeft: 20,
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <View style={{ width: "30%" }}>
          <VictoryPie
            padding={{ top: 30, right: 350, bottom: 30, left: 0 }}
            innerRadius={50}
            text="Pie!"
            data={[
              { x: "", y: 60 },
              { x: "", y: 40 },
            ]}
            height={100}
            style={{
              data: {
                fill: "grey",
                opacity: 1,
                stroke: "yellow",
                strokeWidth: 5,
              },
            }}
          />
        </View>
        <View style={{ width: "70%", top: 30, marginLeft: 10 }}>
          <Text>
            Your are short by 15%.You can make it up by attending 12 classes
            more
          </Text>
        </View>
      </View>
    );
  }
}
