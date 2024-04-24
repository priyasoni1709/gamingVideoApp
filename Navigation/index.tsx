import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "../screens/Tab/Login";
import Home from "../screens/Tab/Home";
import DetailPage from "../screens/Tab/Settings";
import SettingsPage from "../screens/Tab/Settings";
import Settings from "../screens/Tab/Settings";
import AddPost from "../screens/Tab/AddPost";
import Search from "../screens/Tab/Search";
import Notification from "../screens/Tab/Notification";
import SignUp from "../screens/Tab/SignUp";
import AuthGuard from "../auth/AuthGuard";

const StackNavigation = ({ navigation }: any) => {
  const Stack = createNativeStackNavigator();
  const auth = AuthGuard;
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Logo",
        headerStyle: {
          backgroundColor: "rgb(75,63,251)",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          color: "white",
        },

        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
              gap: 10,
            }}
          >
            <Ionicons size={30} name="flash-outline" color="white" />
            <Ionicons size={40} name="person-circle-outline" color="white" />
          </View>
        ),
      }}
    >
      {!auth ? (
        <>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        </>
      ) : (
        <Stack.Screen name="Home" component={TabNavigation}></Stack.Screen>
      )}
    </Stack.Navigator>
  );
};
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // let iconSize = focused ? 30 : size;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Setting") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "AddPost") {
            iconName = focused ? "add" : "add-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          }
          // const iconStyle = focused
          //   ? { borderTopWidth: 2, borderTopColor: "blue" }
          //   : {};
          return (
            <Ionicons
              name={iconName as any}
              size={size}
              color={color}
              // style={iconStyle}
            />
          );
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "red",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default StackNavigation;
