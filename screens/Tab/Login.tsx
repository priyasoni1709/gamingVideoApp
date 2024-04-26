import { AuthContext } from "../../auth/context/AuthContext";
import React, { useEffect, useState, useContext } from "react";
import { View, Button, TextInput, Text } from "react-native";

function Login({ navigation }: any) {
  const { userToken, logIn, isLoading } = useContext(AuthContext);
  console.log(userToken, "auth");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    setFormData({
      name: "",
      password: "",
    });

    // checkLogin();
  }, []);

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNavigation = () => {
    console.log(userToken, "login");
    if (userToken) {
      navigation.navigate("Home", {
        name: formData.name,
        password: formData.password,
      });
    }
    navigation.navigate("SignUp");
  };

  return (
    <View style={{ padding: 10 }}>
      <Text>Name:</Text>
      <TextInput
        onChangeText={(value) => handleChange("name", value)}
        value={formData.name}
      />
      <Text>Password:</Text>
      <TextInput
        onChangeText={(value) => handleChange("password", value)}
        value={formData.password}
      />
      <View className="flex flex-col gap-10 mt-10">
        <Button title="Sign in" onPress={handleNavigation} />
        <Button
          title="Log in"
          onPress={() => {
            logIn();
            handleNavigation();
          }}
        />
      </View>
    </View>
  );
}

export default Login;
