import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";

export default function App() {
  const [choice, setChoice] = useState("");
  const questionImage = "https://via.placeholder.com/150.png?text=?";
  const [imageUri, setImageUri] = useState(questionImage);
  const [error, setError] = useState("");

  function handleShow() {
    const normalized = choice.trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

    if (normalized === "quadrado") {
      setImageUri("https://oblogmenoslidodomundo.com/wp-content/uploads/2014/10/quadrado.jpg");
      setError("");
      return;
    }

    if (normalized === "triangulo") {
      setImageUri("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3K7S78G6Qpge1xWUWU7GX0cFqXnCbmjQCuw&s");
      setError("");
      return;
    }

    if (normalized === "circulo") {
      setImageUri("https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-red-circle-png-image_2381952.jpg");
      setError("");
      return;
    }

    // Forma inválida: mantém imagem de interrogação e mostra erro
    setImageUri(questionImage);
    setError("Forma inválida. Digite: quadrado, triângulo ou círculo.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Que forma geométrica você gostaria de conhecer?</Text>

      <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />

      <TextInput
        style={styles.input}
        placeholder="Digite: quadrado, triângulo ou círculo"
        value={choice}
        onChangeText={setChoice}
        autoCapitalize="none"
      />

      <View style={styles.button}>
        <Button title="Mostrar" onPress={handleShow} />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 12,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  button: {
    width: "100%",
    marginBottom: 8,
  },
  error: {
    color: "red",
    marginTop: 8,
  },
});
