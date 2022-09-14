import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={
        (styles.container,
        {
          backgroundColor: "black",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        })
      }
    >
      <Text style={{ fontSize: 33, color: "white" }}>
        É isso ai Caiozuss ;)
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
