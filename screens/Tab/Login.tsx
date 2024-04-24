// import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Button, TextInput, Text } from "react-native";

function Login({ navigation }: any) {
  // const navigation = useNavigation();
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
    navigation.navigate("Home", {
      name: formData.name,
      password: formData.password,
    });
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
      <Button title="Go to Home Page" onPress={handleNavigation} />
    </View>
  );
}

export default Login;
