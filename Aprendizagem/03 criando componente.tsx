import { View, Text } from "react-native";
import { Welcome } from "../component/02 welcome";

function App() {
    return(
        <View>
            <Text>Seja bem vindo(a)</Text>
            <Welcome/>
            <Welcome/>
        </View>
    );
}

export default App;