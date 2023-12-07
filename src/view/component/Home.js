import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: 70,
            marginTop: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 40, color: "blue" }}>
            Manage Donut
          </Text>
        </View>
      </View>
      <View style={{ flex: 4, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: 200,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#FFFF00",
          }}
          onPress={() => navigation.navigate("ListDonut")}
        >
          <Text style={{ fontSize: 20, fontWeight: 600, }}>
            Get start
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FF00",
  },
});
