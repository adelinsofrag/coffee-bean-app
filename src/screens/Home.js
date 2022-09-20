import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import HomeItem from "../components/list/HomeItem";
import Social from "../components/Social";
import { useTailwind } from "tailwind-rn";

const methodsFlatListData = [
  {
    id: "Aeropress",
    title: "Aeropress",
    src: require("../../assets/aeropress-2.png"),
  },
  {
    id: "PourOver",
    title: "Pour Over",
    src: require("../../assets/dripper.png"),
  },
];

const Home = ({ navigation }) => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind("bg-zinc-50 h-full")}>
      <View style={tailwind("flex-1 h-auto")}>
        <FlatList
          data={methodsFlatListData}
          keyExtractor={(item) => item.title.replace(" ", "-")}
          renderItem={({ item }) => <HomeItem item={item} onPress={() => navigation.navigate(item.id)} />}
        />
      </View>

      <Social />
    </SafeAreaView>
  );
};

export default Home;
