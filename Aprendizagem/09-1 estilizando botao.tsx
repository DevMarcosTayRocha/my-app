import { View, Text, StyleSheet, Pressable } from "react-native";

function App(){

    function handleClick() {
        alert("Clicou no botão");
    }

    return(
        <View style={styles.container}>
            <Pressable style={styles.btn} onPress={handleClick} onHoverIn={() => styles.btnHover} onHoverOut={() => styles.btn}>
                <Text style={styles.btnText}>Toque aqui</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    btn:{
        backgroundColor: "#000",
        width: 200,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    btnHover:{
        backgroundColor: "#333",
    }
});

export default App;