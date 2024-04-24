import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthGuard = ({ navigation }: any) => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const login = await AsyncStorage.getItem("login");
        if (login) {
          setAuth(true);
        }
      } catch (error) {
        console.error("Error reading login state:", error);
      }
    };

    checkLogin();
  }, []);

  useEffect(() => {
    if (auth) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  }, [auth]);

  return auth;
};

export default AuthGuard;
