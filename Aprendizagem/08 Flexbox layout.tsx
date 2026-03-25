import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

function App() {
    const { width } = useWindowDimensions();
    const menuMobile = width <= 425;

    return (
        <View style={styles.tela}>
            {/* TOPO */}
            <View style={styles.topo}>
                <Text style={styles.txt}>topo</Text>
            </View>

            {/* CONTEUDO */}
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>cards</Text>

                <View style={styles.cardsContainer}>
                    <View style={[styles.card, { backgroundColor: "red" }]}>
                        <Text style={styles.txt}>Card1</Text>
                    </View>
                    <View style={[styles.card, { backgroundColor: "blue" }]}>
                        <Text style={styles.txt}>Card2</Text>
                    </View>
                    <View style={[styles.card, { backgroundColor: "green" }]}>
                        <Text style={styles.txt}>Card3</Text>
                    </View>
                    <View style={[styles.card, { backgroundColor: "yellow" }]}>
                        <Text style={styles.txt}>Card4</Text>
                    </View>
                </View>

                <View style={styles.rodapeConteudo}>
                    <Text style={styles.txt}>rodapeConteudo</Text>
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
        marginBottom: 12

    },
    txt: {
        fontWeight: "bold",
        color: "white"
    },
    titulo: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#111827"
    },
    conteudo: {
        flex: 1,
        backgroundColor: "#E2E8F0",
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
    },

    // CARDS

    cardsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        // gap: 10, // Removed unsupported style property
    },

    card: {
        width: "48%",
        height: 90,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    rodapeConteudo: {
        height: 65,
        backgroundColor: "#CBD5E1",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
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