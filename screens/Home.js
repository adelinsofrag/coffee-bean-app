import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { MethodsContent } from "../constants/content";
import HomeItem from "../components/HomeItem";
import Social from "../components/Social";

const Home = ({ navigation }) => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind("bg-zinc-50 h-full")}>
      <View style={tailwind("flex-1 h-auto")}>
        <FlatList
          data={MethodsContent}
          keyExtractor={(item) => item.title.replace(" ", "-")}
          renderItem={({ item }) => <HomeItem item={item} onPress={() => navigation.navigate(item.id)} />}
        />
      </View>

      <Social />
    </SafeAreaView>
  );
};

export default Home;
