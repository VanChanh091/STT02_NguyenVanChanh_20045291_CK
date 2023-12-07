import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/view/store/DonutStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/view/component/Home";
import DetailsDonut from "./src/view/component/DetailsDonut";
import ListDonut from "./src/view/component/ListDonut";
import AddDonut from "./src/view/component/AddDonut";
import EditDonut from './src/view/component/EditDonut'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListDonut">
          {/* <Stack.Screen name="Home" component={Home} options={{headerShown:false}}></Stack.Screen> */}
          <Stack.Screen name="ListDonut" component={ListDonut} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name="DetailsDonut" component={DetailsDonut} ></Stack.Screen>
          <Stack.Screen name="AddDonut" component={AddDonut} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name="EditDonut" component={EditDonut} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </Provider>
  );
}
