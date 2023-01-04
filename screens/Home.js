import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { MethodsContent } from "../constants/content";
import HomeItem from "../components/HomeItem";
import Social from "../components/Social";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-zinc-50 h-full">
      <View className="flex-1 h-auto">
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
