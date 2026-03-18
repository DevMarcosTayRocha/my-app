import { View, Text, StyleSheet, Image } from "react-native";

function App() {
    return(
        <View>
            {/* imagens internas */}
            <Image 
            source={require("../assets/06 paisagem1.jpg")} 
            style={styles.img} 
            resizeMode="cover"
            />

            {/* imagens externas */}
            <Image
            source={{uri:'https://www.google.com.br/google.jpg'}} 
            style={styles.img}
            resizeMode="stretch"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    img:{
        width: 300,
        height: 150,
        backgroundColor: "#FF0000"
    }
});

export default App;

// convenções: camelcase, kebabcase, snakecase, pascalcase