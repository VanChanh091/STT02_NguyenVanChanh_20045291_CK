import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { fetchDonut, editDonut } from "../features/DonutSlice";

const EditDonut = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { data } = route.params;

  const [isUpdated, setIsUpdated] = useState(false);

  const [editImage, setEditImage] = useState(data.data.image);
  const [editName, setEditName] = useState(data.data.name);
  const [editPrice, setEditPrice] = useState(data.data.price);
  const [editType, setEditType] = useState(data.data.type);

  const handleEditDonut = (id) => {
    dispatch(
      editDonut({
        id,
        updateDonut: {
          image: editImage,
          name: editName,
          price: editPrice,
          type: editType,
        },
      })
    );
    setEditImage("");
    setEditName("");
    setEditPrice("");
    setEditType("");
    setIsUpdated(true);
  };

  const backToDetails = () => {
    handleEditDonut(data.data.id);
    navigation.navigate("ListDonut");
    // dispatch(fetchDonut());
  }
  useEffect(() => {
    if (isUpdated) {
      dispatch(fetchDonut());
      setIsUpdated(false); 
    }
  }, [isUpdated]);
  

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
                  fontSize: 20,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                }}
                value={editImage}
                onChangeText={(text) => setEditImage(text)}
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
                  fontSize: 20,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                }}
                value={editName}
                onChangeText={(text) => setEditName(text)}
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
                  fontSize: 20,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                }}
                value={editPrice}
                onChangeText={(text) => setEditPrice(text)}
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
                  fontSize: 20,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                }}
                value={editType}
                onChangeText={(text) => setEditType(text)}
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
            onPress={() => navigation.goBack()}
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
            onPress={backToDetails}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditDonut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
