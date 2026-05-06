import { View, Button, StyleSheet, Image } from "react-native";
import { useState } from "react";

function App(){
    // Substitua estas URLs pelas que você preferir
    const imgA = 'https://anibase.net/files/c61275a4c84f209bb0ee21b3770d018a';
    const imgB = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgPxnv4YyKpJ24mACNVrsBfoDB4rzYKfpPg&s';

    const [currentImage, setCurrentImage] = useState(imgA);

    function handleToggle(){
        setCurrentImage(imgB);
    }

    return(
        <View>
            <Image
                source={{ uri: currentImage }}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />
            <Button title="Crescer" onPress={handleToggle} />
        </View>
    );
}

export default App;