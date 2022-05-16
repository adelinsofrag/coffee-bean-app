import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import AnotherMockScreen from "./src/screens/AnotherMockScreen";

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerTintColor: "black",
  headerStyle: { backgroundColor: "white" },
  headerBackTitle: "Back",
};
const options = {
  Home: { title: "Brewing methods" },
  AnotherMockScreen: { title: "AnotherMockScreen" },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} options={options.Home} />
        <Stack.Screen name="AnotherMockScreen" component={AnotherMockScreen} options={options.AnotherMockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
