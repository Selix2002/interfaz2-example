// App.js

import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import MuscleOverlayMap from "../../components/MuscleOverlayMap";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Toca un músculo</Text>
      <MuscleOverlayMap
        onMusclePress={(muscleId) => {
          // Aquí también puedes hacer más cosas: abrir un modal, mostrar info, etc.
          console.log("Músculo presionado desde App.js:", muscleId);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
});
