import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Header, Content, Tabs, Tab } from "native-base";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

export default class History extends Component {
  render() {
    return (
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          History
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "#333751",
            borderRadius: 25,
            width: "95%",
            padding: 20,
            height: 500,
          }}
        >
          <Tabs style={{ backgroundColor: "#000033" }}>
            <Tab
              heading="Daily"
              style={{ backgroundColor: "#000033", color: "white" }}
            >
              <Text>dasd</Text>
            </Tab>
            <Tab
              heading="Weekly"
              style={{ backgroundColor: "#000033", color: "white" }}
            >
              <Text>dasd</Text>
            </Tab>
            <Tab
              heading="Monthly"
              style={{ backgroundColor: "#000033", color: "white" }}
            >
              <View>
                <VictoryChart
                  style={{ width: "50%" }}
                  theme={VictoryTheme.material}
                  domainPadding={{ x: 15 }}
                >
                  <VictoryBar
                    barRatio={0.8}
                    style={{
                      data: { fill: "#c43a31" },
                    }}
                    data={[
                      { x: "", y: 60 },
                      { x: "", y: 40 },
                      { x: "", y: 40 },
                    ]}
                  />
                </VictoryChart>
              </View>
            </Tab>
          </Tabs>
        </View>
      </View>
    );
  }
}
