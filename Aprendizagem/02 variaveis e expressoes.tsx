import { View, Text } from "react-native";

function App() {

    // tipagem implicita (inferência)
    // const aluno = "Mariana";
    // const idade = 18;

    // tipagem explicita
    const aluno:string = "Mariana";
    const idade:number = 18;
    
    return(

        <View>
            <Text>Olá, {aluno}</Text>
            <Text>Sua idade é: {idade}</Text>
            <Text>Daqui a 5 anos você terá: {idade+5}</Text>
        </View>
    );
}

export default App;