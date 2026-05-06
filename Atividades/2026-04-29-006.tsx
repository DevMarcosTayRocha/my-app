import { View, Button, StyleSheet, Image, Pressable} from "react-native";
import { useState } from "react";

function App(){
    // Substitua estas URLs pelas que você preferir
    const imgA = 'https://anibase.net/files/c61275a4c84f209bb0ee21b3770d018a';
    const imgB = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CvisIWRPUG0b2DqyakP5ZpPvhL39WccmPw&s';
    const imgC = 'https://i.redd.it/variations-to-the-minecraft-logo-v0-0dzqovtefeqd1.png?width=1218&format=png&auto=webp&s=4e7beefe76053942332e5c9f4c4f71671f97e63e';

    const [currentImage, setCurrentImage] = useState(imgA);

    function handleClick1(){
        setCurrentImage(imgA);
    }
    function handleClick2(){
        setCurrentImage(imgB);
    }
    function handleClick3(){
        setCurrentImage(imgC);
    }

    return(
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 20 }}>
            <Pressable onPress={handleClick1}>
                <Image
                    source={{ uri: imgA }}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                />
            </Pressable>
            <Pressable onPress={handleClick2}>
                <Image
                    source={{ uri: imgB }}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                />
            </Pressable>
            <Pressable onPress={handleClick3}>
                <Image
                    source={{ uri: imgC }}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                />
            </Pressable>
            </View>
            <Image
                source={{ uri: currentImage }}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />
        </View>
    );
}

export default App;