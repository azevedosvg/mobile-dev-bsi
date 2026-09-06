import { StyleSheet, View } from "react-native";

// definindo valores para a prop
type Orientation = "vertical" | "horizontal";

// interface descreve as props que o componente recebe
interface TrafficLightProps {
  orientation: Orientation;
}

export default function TrafficLight({ orientation }: TrafficLightProps) {
  const isVertical = orientation === "vertical";

  return (
    <View
      style={[
        styles.body,
        isVertical ? styles.bodyVertical : styles.bodyHorizontal,
      ]}
    >
      <View style={[styles.circle, styles.red]} />
      <View style={[styles.circle, styles.yellow]} />
      <View style={[styles.circle, styles.green]} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#2b2b2b",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  bodyVertical: {
    width: 100,
    height: 200,
    flexDirection: "column",
    paddingVertical: 16,
  },
  bodyHorizontal: {
    width: 260,
    height: 100,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  red: {
    backgroundColor: "#ff4d4d",
  },
  yellow: {
    backgroundColor: "#ffd633",
  },
  green: {
    backgroundColor: "#4caf50",
  },
});
