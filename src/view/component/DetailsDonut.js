import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import {deleteDonut } from "../features/DonutSlice";
import { useDispatch } from "react-redux";

const DetailsDonut = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { data } = route.params;

  const handleDeleteDonut = (id) => {
    dispatch(deleteDonut(id));
  };

  const handleBackList = () => {
    handleDeleteDonut(data.id);
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={data.image}
          style={{ width: 280, height: 280, resizeMode: "contain" }}
        ></Image>
      </View>
      <View style={{ flex: 6 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 22, paddingLeft: 15 }}>
              {data.name}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 6.5 }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 17,
                  color: "grey",
                  paddingLeft: 15,
                }}
              >
                Spicy Tasty Donut Family
              </Text>
            </View>
            <View style={{ flex: 3.5 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                ${data.price}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1.5 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 6.5 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    width: "20%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../img/clock.png")}
                    style={{ width: 25, height: 25, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    width: "80%",
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 17,
                      color: "grey",
                      paddingLeft: 5,
                    }}
                  >
                    Delivery in
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontWeight: "700", fontSize: 20, paddingLeft: 30 }}
                >
                  30 min
                </Text>
              </View>
            </View>
            <View style={{ flex: 3.5, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={require("../img/minus.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "700", fontSize: 20 }}>1</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  borderRightWidth: 1,
                  justifyContent: "center",
                  paddingLeft: 5,
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={require("../img/add.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 1.5 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontWeight: "700", fontSize: 20, paddingLeft: 15 }}
              >
                Restaurants info
              </Text>
            </View>
            <View style={{ flex: 2, justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "400",
                  color: "#000000AB",
                  fontSize: 16,
                  paddingHorizontal: 15,
                }}
              >
                Order a Large Pizza but the size is the equivalent of a
                medium/small from other places at the same price range.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.8,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F1B000",
                width: "90%",
                height: 60,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("EditDonut", { data: {data} })}
            >
              <Text
                style={{ fontSize: 22, fontWeight: "bold", color: "white" }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F1B000",
                width: "90%",
                height: 60,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleBackList}
            >
              <Text
                style={{ fontSize: 22, fontWeight: "bold", color: "white" }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsDonut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
