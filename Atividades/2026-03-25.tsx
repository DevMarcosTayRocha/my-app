import { View, Text, StyleSheet, useWindowDimensions, Image } from "react-native";

function App() {
    const { width } = useWindowDimensions();
    const menuMobile = width <= 425;

    return (
        <View style={styles.tela}>
            {/* TOPO */}
            <View style={styles.topo}>
                <Text style={styles.txt}>topo</Text>
            </View>

            <View style={styles.banner}>
                <Image
                    source={{ uri: 'https://a.storyblok.com/f/178900/1920x1080/ab7a8d0a63/the-fragrant-flower-blooms-with-dignity.png' }}
                    style={styles.img}
                    resizeMode="cover"
                />
            </View>

            {/* CONTEUDO */}
            <View style={styles.meio}>
                <Text style={styles.titulo}>Meio</Text>

                <View style={styles.lista1}>
                    <Text style={styles.titulo}>Lista 1</Text>

                    <View style={[styles.card1, { backgroundColor: "red" }]}>
                        <Text style={styles.txt}>Card1</Text>
                    </View>
                    <View style={[styles.card1, { backgroundColor: "blue" }]}>
                        <Text style={styles.txt}>Card2</Text>
                    </View>
                    <View style={[styles.card1, { backgroundColor: "green" }]}>
                        <Text style={styles.txt}>Card3</Text>
                    </View>
                    <View style={[styles.card1, { backgroundColor: "yellow" }]}>
                        <Text style={styles.txt}>Card4</Text>
                    </View>

                </View>

                <View style={styles.lista2}>
                    <Text style={styles.titulo}>Lista 2</Text>

                    <View style={styles.cardsContainer}>
                        <View style={[styles.card2, { backgroundColor: "red" }]}>
                            <Text style={styles.txt}>Card1</Text>
                        </View>
                        <View style={[styles.card2, { backgroundColor: "blue" }]}>
                            <Text style={styles.txt}>Card2</Text>
                        </View>
                        <View style={[styles.card2, { backgroundColor: "green" }]}>
                            <Text style={styles.txt}>Card3</Text>
                        </View>
                        <View style={[styles.card2, { backgroundColor: "yellow" }]}>
                            <Text style={styles.txt}>Card4</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.menu, { display: menuMobile ? "flex" : "none" }]}>
                <View style={[styles.menuItem, { backgroundColor: "red" }]}>
                    <Text style={styles.txt}>menuItem1</Text>
                </View>
                <View style={[styles.menuItem, { backgroundColor: "blue" }]}>
                    <Text style={styles.txt}>menuItem2</Text>
                </View>
                <View style={[styles.menuItem, { backgroundColor: "green" }]}>
                    <Text style={styles.txt}>menuItem3</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: "#F1F5F9",
        padding: 25,
    },
    topo: {
        height: 70,
        backgroundColor: "#93C5FD",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
        borderRadius: 10,
    },
    banner: {
        width: "100%",
        height: 150,
    },
    img: {
        width: "100%",
        height: "100%",

    },
    txt: {
        fontWeight: "bold",
        color: "white"
    },
    titulo: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#ffffffff"
    },
    meio: {
        flex: 1,
        backgroundColor: "#d266f3ff",
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
    },
    lista1: {
        flex: 1,
        backgroundColor: "#ec8affff",
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
    },

    cardsContainer:{
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },

    lista2: {
        flex: 1,
        backgroundColor: "#f3b6ffff",
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
    },

    // CARDS

    // cardsContainer: {
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    //     justifyContent: "space-between",
    // },

    card1: {
        width: "40%",
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    card2: {
        width: "100%",
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    // MENU MOBILE
    menu: {
        height: 65,
        backgroundColor: "#CBD5E1",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    menuItem: {
        width: 80,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default App;