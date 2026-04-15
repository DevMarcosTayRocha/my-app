import { View, Text, StyleSheet, Button } from "react-native";

function App(){

    function handleClick(){
        alert("Clicou no botão");
    }

    return(
        <View style={styles.container}>
            <View style={styles.box}></View>

            <View style={styles.boxWrapper}>
                <Button title="Clique aqui" onPress={handleClick}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        width: "100%",
    },
    box:{
        backgroundColor: "#000",
        width: "100%",
        height: 100,
        marginBottom: 20,
    },
    boxWrapper:{
        width: "100%",
        height: 100,
        marginBottom: 20,
    }
});

export default App;