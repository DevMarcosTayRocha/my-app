import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";

function App(){
    const [texto, setTexto] = useState(false);

    function handleClick1() {
        setTexto(false);
    }

    function handleClick2() {
        setTexto(true);
    }

    return(
        <View>
            <Text style={texto ? styles.text2 : styles.text1 }>Texto bonito que vai mudar de cor</Text>
            <Button title="Mostrar" onPress={handleClick1} />
            <Button title="Ocultar" onPress={handleClick2} />
        </View>
    );
}

const styles = StyleSheet.create({
    text1: {
        display: "flex",
    },
    text2: {
        display: "none",
    }
});

export default App;