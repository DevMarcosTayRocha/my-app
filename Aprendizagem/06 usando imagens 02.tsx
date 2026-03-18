import { View, Text, StyleSheet, Image } from "react-native";

function App() {
    return(
        <View style={styles.tela}>
            {/* Imagem Recurso */}
            <View style={styles.card}>
                <Text style={styles.titulo}>Imagem recurso (local)</Text>

                <Image 
                style={styles.avatar} 
                source={require("../assets/06 paisagem1.jpg")}
                resizeMode="cover"
                />

                <Text style={styles.texto}>Carrega mesmo sem internet</Text>
            </View>

            {/* Imagem remota */}
            <View style={[styles.card, {marginTop: 14}]}>

                <Text style={styles.titulo}>Imagem remota (online)</Text>

                <Image
                style={styles.banner}
                source={{uri: "https://picsum.photos/600/300"}}
                resizeMode="contain"
                />

                <Text style={styles.texto}>
                    Se estiver sem internet, esta imagem pode não carregar
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: '#f1f5f9',
        padding: 16,
    },
    card:{
        backgroundColor: '#ffffff',
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0'
    },
    titulo:{
        fontSize: 16,
        fontWeight: "700",
        color: '#0f172a',
        marginBottom: 10,
        textAlign: "center",
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
        backgroundColor: '#e2e8f0',
        marginBottom: 10,
    },
    texto:{
        fontSize: 12,
        color: '#334155',
        textAlign: "center",
    },
    banner:{
        width:"100%",
        height: 150,
        backgroundColor: "#fee2e2",
        borderRadius: 10,
        marginBottom: 10,
    }
});

export default App;

