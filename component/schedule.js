import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Header, Body, Card, CardItem } from "native-base";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

export default class Schedule extends Component {
  render() {
    return (
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginTop: 20,
          }}
        >
          Schedule
        </Text>
        <View
          style={{
            flex: 1,
            marginLeft: -20,
            width: "95%",
            padding: 20,
            height: 200,
            flexDirection: "row",
          }}
        >
          <Card
            style={{
              backgroundColor: "purple",
              borderRadius: 10,
              borderColor: "black",
              height: "30%",
              width: "40%",
            }}
          >
            <CardItem
              style={{
                backgroundColor: "purple",
                borderRadius: 10,
                borderColor: "black",
                color: "white",
              }}
            >
              <Body>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  Upcoming
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 17,
                    marginTop: 20,
                    fontWeight: "700",
                  }}
                >
                  11:00 am
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "700",
                    marginBottom: 20,
                  }}
                >
                  Sat,1st Feb
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card
            style={{
              backgroundColor: "#99ff66",
              borderRadius: 10,
              borderColor: "black",
              height: "30%",
              width: "40%",
            }}
          >
            <CardItem
              style={{
                backgroundColor: "#99ff66",
                borderRadius: 10,
                borderColor: "black",
                color: "white",
              }}
            >
              <Body>
                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                  }}
                >
                  Attended
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    marginTop: 20,
                    fontWeight: "700",
                  }}
                >
                  9:00 am
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    fontWeight: "700",
                    marginBottom: 20,
                  }}
                >
                  Tue,28th Jan
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card
            style={{
              backgroundColor: "#ff8080",
              borderRadius: 10,
              borderColor: "black",
              height: "30%",
              width: "40%",
            }}
          >
            <CardItem
              style={{
                backgroundColor: "#ff8080",
                borderRadius: 10,
                borderColor: "black",
                color: "white",
              }}
            >
              <Body>
                <Text
                  style={{
                    color: "black",
                  }}
                >
                  Skipped
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    marginTop: 25,
                    fontWeight: "700",
                  }}
                >
                  1:00 pm
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    fontWeight: "700",
                    marginBottom: 20,
                  }}
                >
                  Mon,4th Feb
                </Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}
