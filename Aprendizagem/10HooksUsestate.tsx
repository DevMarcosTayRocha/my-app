import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

function App() {

    function handleClick() {
        setCount(count + 1);
    }
    function handle2Click() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <View style={styles.btn}>
                <Button title="Aumente a contagem" onPress={handleClick} />
                <Button title="Diminui a contagem" onPress={handle2Click} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        flex: 1,
        fontSize: 64,
        fontWeight: "bold",
        marginBottom: 20,
        width: "100%",
        textAlign: "center",
    },
    btn: {
        flex: 1,
    }

});

export default App;