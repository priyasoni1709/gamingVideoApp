import React from "react";
import { View, Text, TextInput, Animated, FlatList } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const quoteArray = [
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  {
    quote: "More Pain More Gain",
  },
  // {
  //   quote: "More Pain More Gain",
  // },
  // {
  //   quote: "More Pain More Gain",
  // },
  // {
  //   quote: "More Pain More Gain",
  // },
  // {
  //   quote: "More Pain More Gain",
  // },
  // {
  //   quote: "More Pain More Gain",
  // },
  // {
  //   quote: "More Pain More Gain",
  // },
  // {
  //   quote: "More Pain More Gain",
  // },
  // {
  //   quote: "More Pain More Gain",
  // },
  // {
  //   quote: "More Pain More Gain",
  // },
  // {
  //   quote: "More Pain More Gain",
  // },
];

function Home({ route }: any) {
  // if (route?.name === "Home") {
  return (
    <View style={{ padding: 10 }}>
      <Text>Name: {route?.params?.name}</Text>
      <Text>Password: {route?.params?.password}</Text>
      <FlatList
        data={quoteArray}
        renderItem={({ item }) => (
          <View style={{ paddingBottom: 10 }}>
            <Text>{item.quote}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
  // }
  // return null;
}
export default Home;
