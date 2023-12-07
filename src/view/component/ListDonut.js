import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonut } from "../features/DonutSlice";

const ListDonut = ({ navigation }) => {
  const dispatch = useDispatch();
  const donuts = useSelector((state) => state.donuts.donuts);
  const status = useSelector((state) => state.donuts.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDonut());
    }
  }, [status, dispatch]);

  const renderItem = ({ item }) => (
    <View
      style={{
        width: "100%",
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View
        style={{
          width: "95%",
          height: 125,
          borderRadius: 10,
          backgroundColor: "#F4DDDD",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 3.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={item.image}
            style={{ width: 110, height: 110, resizeMode: "contain" }}
          ></Image>
        </View>
        <View style={{ flex: 6.5 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 20 }}>{item.name}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <Text
              style={{
                color: "#0000008A",
                fontWeight: "700",
                fontSize: 17,
              }}
            >
              Spicy tasty donut family
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 8,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 20,
                  paddingLeft: 10,
                }}
              >
                $ {item.price}
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DetailsDonut", { data: item })
                }
              >
                <Image
                  source={require("../img/buttonAdd.png")}
                  style={{
                    width: 45,
                    height: 45,
                    resizeMode: "contain",
                    paddingRight: 3,
                    paddingBottom: 3,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", height: 60, }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 250,
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF6666",
            }}
            onPress={() => navigation.navigate("AddDonut")}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                marginTop: -5,
                color: "white",
              }}
            >
              Add Donut 
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <FlatList
        style={{ flex: 1 }}
        data={donuts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default ListDonut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
