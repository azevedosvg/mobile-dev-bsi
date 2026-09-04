import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// componente principal
export default function Index() {
  return (
    // SafeAreaView evita que o conteudo fique sobre a câmera, notch ou barras do sistema
    <SafeAreaView style={styles.container}>
      {/* StatusBar controla a cor dos ícones e textos na barra de status */}
      <StatusBar style="dark" />

      {/* card do post */}
      <View style={styles.card}>
        {/* cabecalho: avatar + nome, lado a lado */}
        <View style={styles.header}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Gabriel Azevedo</Text>
        </View>
        <Text style={styles.content}>
          This is my first challenge for the Mobile Development course. I built
          this card using View, Text, Image, SafeAreaView, and StyleSheet, with
          rounded corners and a soft shadow.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5", // cinza levemente azulado, mais próximo de apps reais (ex: Facebook)
  },
  card: {
    marginHorizontal: 12, // margem só nas laterais
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
    color: "#1c1c1e",
  },
  content: {
    marginTop: 14,
    fontSize: 14.5,
    lineHeight: 21,
    color: "#3c3c43",
  },
});
