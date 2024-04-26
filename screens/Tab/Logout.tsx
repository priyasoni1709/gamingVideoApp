import React, { useContext } from "react";
import { Button, View, Text } from "react-native";
import { AuthContext } from "../../auth/context/AuthContext";

function Logout() {
  const { logOut } = useContext(AuthContext);
  // console.log(userToken, "auth");
  return (
    <View>
      <Text>HII</Text>
      <Button title="Log-Out" onPress={logOut} />
    </View>
  );
}

export default Logout;
