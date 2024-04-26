import { PanResponder, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "../screens/Tab/Login";
import Home from "../screens/Tab/Home";
// import SettingsPage from "../screens/Tab/Settings";
// import AddPost from "../screens/Tab/AddPost";
import Notification from "../screens/Tab/Notification";
import SignUp from "../screens/Tab/SignUp";
import Profile from "../screens/Tab/UserProfile";
import { AuthContext } from "../auth/context/AuthContext";
import { useContext, useRef } from "react";
import Logout from "../screens/Tab/Logout";
import {
  GestureHandlerRootView,
  Directions,
} from "react-native-gesture-handler";
import Explore from "../screens/Tab/Explore";
import { useNavigation } from "@react-navigation/native";
import Settings from "../screens/Tab/Settings";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const { userToken } = useContext(AuthContext);
  console.log(userToken, "userToken");
  const navigation: any = useNavigation();
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const { dx } = gestureState;
        if (dx > 50) {
          navigation.navigate("Explore");
        } else if (dx < -50) {
          navigation.navigate("Profile");
        }
      },
    })
  ).current;

  return (
    <GestureHandlerRootView
      style={styles.container}
      {...panResponder.panHandlers}
    >
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
              <Ionicons size={40} name="person-circle-outline" color="white" />
            </View>
          ),
        }}
      >
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        {!userToken ? (
          <>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={TabNavigation}></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
            <Stack.Screen name="Explore" component={Explore}></Stack.Screen>
            <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </GestureHandlerRootView>
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
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Explore") {
            iconName = "videocam";
          } else if (route.name === "AddPost") {
            iconName = "videocam";
          } else if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "Notification") {
            iconName = "flash";
          } else if (route.name === "Logout") {
            iconName = "log-out";
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#cd6dcb",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "black",
          opacity: 20,
          // overflow: "hidden",
        },
      })}
      // tabBar={(props) => <AnimatedTabBar tabs={tabs} {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: "#d69ed6",
            color: "#c84bbf",
            fontSize: 12,
            fontWeight: "600",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default StackNavigation;
