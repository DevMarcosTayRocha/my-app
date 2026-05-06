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
            <Button title="sem cor" onPress={handleClick1} />
            <Button title="com cor" onPress={handleClick2} />
        </View>
    );
}

const styles = StyleSheet.create({
    text1: {
        color: "black",
    },
    text2: {
        color: "red",
    }
});

export default App;