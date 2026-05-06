import { View, Button, StyleSheet, Image } from "react-native";
import { useState } from "react";

function App(){

    const [imageH, setImageH] = useState(100);

    function handleClick1(){setImageH(100);}
    function handleClick2(){setImageH(300);}
    function handleClick3(){setImageH(500);}

    return(
        <View>
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgPxnv4YyKpJ24mACNVrsBfoDB4rzYKfpPg&s' }}
                style={{ width: imageH, height: imageH }}
                resizeMode="contain"
            />
            <Button title="100px" onPress={handleClick1} />
            <Button title="300px" onPress={handleClick2} />
            <Button title="500px" onPress={handleClick3} />
        </View>
    );
}

export default App;