import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Aeropress from "./screens/Aeropress";
import PourOver from "./screens/PourOver";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { BACKGROUND_COLOR_LIGHT, TINT_COLOR } from "./constants/style";

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerBackTitle: "Back",
  headerStyle: { backgroundColor: BACKGROUND_COLOR_LIGHT },
  headerTintColor: TINT_COLOR,
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
