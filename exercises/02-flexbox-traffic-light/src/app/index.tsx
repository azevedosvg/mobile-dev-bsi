import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TrafficLight from "../components/TrafficLight";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <TrafficLight orientation="vertical" />
        <TrafficLight orientation="horizontal" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
});
