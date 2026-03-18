import { View, Text, StyleSheet } from "react-native";

function App(){
    return(
        <View style={styles.container}>
            <View style={styles.blue}></View>
            <View style={styles.lightblue}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FF0000",
        flexDirection:"row",
        minHeight: 200,
        width:'100%',
        // height: 100,
    },
    blue:{
        backgroundColor: "#0000FF",
        height: 80,
        flex: 1,
        minWidth: 50,
    },
    lightblue:{
        backgroundColor: "#00FFFF",
        height: 80,
        flex: 1,
        minWidth: 50,
    }
});

export default App;