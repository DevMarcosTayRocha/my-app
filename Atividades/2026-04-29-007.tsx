import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";

export default function App() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  const [imageError, setImageError] = useState(false);

  // URL confiável para teste (PNG). Você pode trocar pela sua URL HTTPS.
  const squareImage = "https://gartic.com.br/imgs/mural/th/thata_p/1247017749.png";

  function handleCheck() {
    const normalized = answer.trim().toLowerCase();
    if (normalized === "quadrado") {
      setResult(true);
    } else {
      setResult(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Que forma geométrica é essa?</Text>

      <Image
        source={{ uri: squareImage }}
        style={styles.image}
        onError={() => setImageError(true)}
        onLoad={() => setImageError(false)}
      />

      {imageError && <Text style={{ color: 'red' }}>Não foi possível carregar a imagem.</Text>}

      <TextInput
        style={styles.input}
        placeholder="Digite sua resposta"
        value={answer}
        onChangeText={setAnswer}
        autoCapitalize="none"
      />

      <View style={styles.button}>
        <Button title="Verificar" onPress={handleCheck} />
      </View>

      {result === true && <Text style={styles.correct}>Parabéns! Você acertou.</Text>}
      {result === false && <Text style={styles.wrong}>Resposta incorreta. Tente novamente.</Text>}
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
    fontSize: 20,
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  button: {
    width: "100%",
    marginBottom: 12,
  },
  correct: {
    color: "green",
    fontWeight: "bold",
    marginTop: 8,
  },
  wrong: {
    color: "red",
    fontWeight: "bold",
    marginTop: 8,
  },
});