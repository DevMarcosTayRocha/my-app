
import { Text } from "react-native";

type Props = {
    name:string;
    age:number;
}  

export const Welcome = (props: Props) => {
    return(
        <Text>Oi, {props.name}, tudo bem? Você tem {props.age} anos.</Text>
    );
}