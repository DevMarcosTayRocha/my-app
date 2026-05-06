import { View, Text, Button } from "react-native";
import { useState } from "react";

function App(){
    const [texto, setTexto] = useState("Texto inicial");

    function handleClick() {
        setTexto("A mágica continua!");
    }

    return(
        <View>
            <Text>{texto}</Text>
            <Button title="Atualizar texto" onPress={handleClick} />
        </View>
    );
}

export default App;