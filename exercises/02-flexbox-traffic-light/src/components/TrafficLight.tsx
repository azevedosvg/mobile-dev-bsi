import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type Orientation = "vertical" | "horizontal";
type LightColor = "red" | "yellow" | "green";

interface TrafficLightProps {
  orientation: Orientation;
}

// Ordem em que as luzes vão acender, uma após a outra
const SEQUENCE: LightColor[] = ["red", "yellow", "green"];

export default function TrafficLight({ orientation }: TrafficLightProps) {
  const isVertical = orientation === "vertical";

  // useState guarda a luz que está acesa agora.
  // "activeLight" é o valor atual; "setActiveLight" é a função pra mudar esse valor.
  // O valor inicial é 'red' (primeira luz da sequência).
  const [activeLight, setActiveLight] = useState<LightColor>("red");

  // useEffect roda esse código assim que o componente aparece na tela.
  useEffect(() => {
    // setInterval executa uma função repetidamente, a cada X milissegundos
    const interval = setInterval(() => {
      setActiveLight((current) => {
        // Encontra a posição da luz atual dentro da sequência
        const currentIndex = SEQUENCE.indexOf(current);
        // Calcula a próxima posição; o "% SEQUENCE.length" faz voltar
        // pro início (0) depois de chegar na última luz
        const nextIndex = (currentIndex + 1) % SEQUENCE.length;
        return SEQUENCE[nextIndex];
      });
    }, 1500); // troca de luz a cada 1500ms (1,5 segundo)

    // "Função de limpeza": roda quando o componente sai da tela,
    // pra parar o timer e evitar vazamento de memória
    return () => clearInterval(interval);
  }, []); // o array vazio [] significa "rode isso só uma vez, ao montar o componente"

  return (
    <View
      style={[
        styles.body,
        isVertical ? styles.bodyVertical : styles.bodyHorizontal,
      ]}
    >
      <View
        style={[
          styles.circle,
          styles.red,
          // Se essa luz não estiver ativa, aplica um estilo que reduz a opacidade
          activeLight !== "red" && styles.dimmed,
        ]}
      />
      <View
        style={[
          styles.circle,
          styles.yellow,
          activeLight !== "yellow" && styles.dimmed,
        ]}
      />
      <View
        style={[
          styles.circle,
          styles.green,
          activeLight !== "green" && styles.dimmed,
        ]}
      />
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
    height: 260,
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
  dimmed: {
    opacity: 0.25, // deixa a luz "apagada" bem mais transparente/escura
  },
});
