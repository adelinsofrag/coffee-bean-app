import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Aeropress from "./src/screens/methods/Aeropress";
import PourOver from "./src/screens/methods/PourOver";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerBackTitle: "Back",
  headerStyle: { backgroundColor: "#fafafa" },
  headerTintColor: "#0c4a6e",
};

const options = {
  Home: { title: "Happy Brewing" },
  Aeropress: { title: "Aeropress" },
  PourOver: { title: "Pour Over" },
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} options={options.Home} />
        <Stack.Screen name="Aeropress" component={Aeropress} options={options.Aeropress} />
        <Stack.Screen name="PourOver" component={PourOver} options={options.PourOver} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return (
    <TailwindProvider utilities={utilities} colorScheme="light">
      <RootNavigator />
    </TailwindProvider>
  );
}

export default App;
