import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const logIn = () => {
        setIsLoading(true);
        setUserToken("ijkasajsjas")
        AsyncStorage.setItem("userToken", "ijkasajsjas")
        setIsLoading(false);
    }
    const logOut = () => {
        setIsLoading(true);
        setUserToken(null)
        AsyncStorage.removeItem("userToken")
        setIsLoading(false);
        console.log("LogoutClg")
    }
    const checkLogin = async () => {
        try {
            setIsLoading(true);
            const userToken = await AsyncStorage.getItem("userToken");
            setUserToken(userToken);
            setIsLoading(true);
        } catch (error) {
            console.error("Error reading login state:", error);
        }
    };
    useEffect(() => {
        // checkLogin();
    }, []);
    return (
        <AuthContext.Provider value={{ logIn, logOut, isLoading, userToken }}>{children}</AuthContext.Provider>
    )
}