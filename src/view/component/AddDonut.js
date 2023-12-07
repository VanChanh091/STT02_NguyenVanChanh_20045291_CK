import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { addDonut, fetchDonut } from "../features/DonutSlice";
import { useDispatch } from "react-redux";

const AddDonut = ({ navigation }) => {
  const dispatch = useDispatch();
  const [newImage, setNewImage] = useState("");
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newType, setNewType] = useState("");

  const handleAddDonut = () => {
    const newDonut = {
      image: newImage,
      name: newName,
      price: newPrice,
      type: newType,
    };
    dispatch(addDonut(newDonut));
    setNewImage("");
    setNewName("");
    setNewPrice("");
    setNewType("");
    fetchDonut();
  };

  const handleBackList = () => {
    handleAddDonut();
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", height: 350, marginTop: 50 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 2.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: 400, fontSize: 20 }}>Image</Text>
          </View>
          <View
            style={{
              flex: 7.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: 50,
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <TextInput
                placeholder="Enter Link Image"
                style={{
                  paddingLeft: 10,
                  color: "grey",
                  fontSize: 20,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                }}
                value={newImage}
                onChangeText={(text) => setNewImage(text)}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 2.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: 400, fontSize: 20 }}>Name</Text>
          </View>
          <View
            style={{
              flex: 7.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: 50,
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <TextInput
                placeholder="Enter Name"
                style={{
                  paddingLeft: 10,
                  color: "grey",
                  fontSize: 20,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                }}
                value={newName}
                onChangeText={(text) => setNewName(text)}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 2.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: 400, fontSize: 20 }}>Price</Text>
          </View>
          <View
            style={{
              flex: 7.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: 50,
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <TextInput
                placeholder="Enter Price"
                style={{
                  paddingLeft: 10,
                  color: "grey",
                  fontSize: 20,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                }}
                value={newPrice}
                onChangeText={(text) => setNewPrice(text)}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 2.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: 400, fontSize: 20 }}>Type</Text>
          </View>
          <View
            style={{
              flex: 7.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: 50,
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <TextInput
                placeholder="Enter Type"
                style={{
                  paddingLeft: 10,
                  color: "grey",
                  fontSize: 20,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                }}
                value={newType}
                onChangeText={(text) => setNewType(text)}
              ></TextInput>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 100,
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
              width: 150,
              height: 50,
              borderRadius: 10,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("ListDonut")}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Back
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
              width: 150,
              height: 50,
              borderRadius: 10,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleBackList}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddDonut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
