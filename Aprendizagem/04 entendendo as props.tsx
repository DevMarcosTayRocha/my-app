import { View, Text } from "react-native";
import { Welcome } from "../component/04 welcome";

function App() {
    return(
        <View>
            <Text>Seja bem vindo(a)</Text>
            <Welcome name="Italo" age={90}/>
            <Welcome name="João" age={80}/>
            <Welcome name="Pedro" age={70}/>
            <Welcome name="Rafael" age={12}/>
            <Welcome name="Rafaela" age={40}/>
        </View>
    );
}

export default App;