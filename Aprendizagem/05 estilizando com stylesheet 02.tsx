import { View, Text, StyleSheet } from "react-native";

function App() {
    return(
        <View style={styles.tela}>
            <View style={styles.cartao}>
                <Text style={styles.titulo}>Informação</Text>

                <Text style={styles.texto}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore 
                    recusandae obcaecati dolorum minima saepe quia ullam vel? Consequatur, dolore.
                </Text>

                <Text style={styles.destaque}>React Native</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: '#e5e7eb',
        paddingTop: 120,
        paddingHorizontal: 20,
    },
    cartao: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        maxWidth: 400,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: '#cbd5e1'
    },
    titulo: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12,
    },
    texto: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 16,
    },
    destaque: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    }
});

export default App;

