import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Header, Content, Button, Input } from "native-base";

export default class Classes extends Component {
  render() {
    return (
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginBottom: 20,
          }}
        >
          Classes
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "#333751",
            borderRadius: 25,
            width: "95%",
            padding: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", marginBottom: 25, marginLeft: 15 }}
          >
            <Text style={{ color: "white", fontSize: 15, marginRight: 150 }}>
              Total
            </Text>
            <Button
              light
              style={{
                backgroundColor: "#9999ff",
                width: 40,
                height: 30,
                borderRadius: 10,
                padding: 18,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                -
              </Text>
            </Button>
            <Input
              style={{
                backgroundColor: "#000033",
                maxWidth: "20%",
                height: 30,
                color: "white",
                textAlign: "center",
              }}
              placeholder="70"
            />
            <Button
              light
              style={{
                backgroundColor: "#9999ff",

                width: 40,
                borderRadius: 10,
                height: 30,
                padding: 15,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                +
              </Text>
            </Button>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 15 }}>
            <Text style={{ color: "white", fontSize: 15, marginRight: 125 }}>
              Attended
            </Text>
            <Button
              light
              style={{
                backgroundColor: "#9999ff",
                width: 40,
                height: 30,
                borderRadius: 10,
                padding: 18,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                -
              </Text>
            </Button>
            <Input
              style={{
                backgroundColor: "#000033",
                maxWidth: "20%",
                height: 30,
                color: "white",
                textAlign: "center",
              }}
              placeholder="45"
            />
            <Button
              light
              style={{
                backgroundColor: "#9999ff",
                width: 40,
                borderRadius: 10,
                height: 30,
                padding: 15,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                +
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
