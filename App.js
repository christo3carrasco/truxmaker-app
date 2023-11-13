import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import Navigation from "./src/navigation/Navigation";
import { ProviderContext } from "./src/context/Context";

export default function App() {
  return (
    <ProviderContext>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ProviderContext>
  );
}
