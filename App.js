import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 

export default function App() {
  return (
    <SafeAreaView>
      <View style= {styles.container}>
          <StatusBar style="auto" />
          <View style = {styles.block1}>
            <Text> TruxMarket </Text>
          </View>
          <View style={styles.block2}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    display:'flex', 
    alignItems:'center', 
    justifyContent: 'center', 
    flexDirection:'column'
  },
  block1:{
    flex:1, 
    height:'auto', 
  },
  block2:{
    flex:1, 
    height:'auto', 
  }
});
