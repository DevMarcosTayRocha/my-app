import { View, Text, StyleSheet } from "react-native";

function App() {
    return(
        <View>
            <Text style={styles.vermelho}>Seja bem vindo(a)</Text>

            <View style={styles.bola}>
                <Text style={styles.bolaText}>B</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    vermelho: {
        color: '#FF0000',
        fontSize: 24,
        // textAlign: "center",
    },
    bola: {
        width: 100,
        height: 100,
        backgroundColor: '#0000FF',
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    bolaText: {
        fontSize: 28,
        color: '#FFFFFF'
    }
});

export default App;

// convenções: camelcase, kebabcase, snakecase, pascalcase