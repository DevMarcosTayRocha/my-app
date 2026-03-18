import { View, Text, StyleSheet } from "react-native";

function App(){
    return(
        <View style={styles.tela}>
            {/* EXEMPLO 1 */}
            <Text style={styles.titulo}>Row + space-between</Text>

            <View style={styles.linhaSpaceBetween}>
                <View style={styles.caixa}></View>
                <View style={styles.caixa}></View>
                <View style={styles.caixa}></View>
            </View>

            {/* EXEMPLO 2 */}
            <Text style={styles.titulo}>Center + Center</Text>

            <View style={styles.centerTudo}>
                <View style={styles.caixaGrande}>
                    <Text>Centro</Text>
                </View>
            </View>

            {/* EXEMPLO 3 */}
            <Text style={styles.titulo}>alignItems</Text>

            <View style={styles.alignItens}>
                <View style={styles.caixaPequena}></View>
                <View style={styles.caixaMedia}></View>
                <View style={styles.caixaGrande}></View>
            </View>

            {/* EXEMPLO 4 */}
            <Text style={styles.titulo}>alignSelf</Text>

            <View style={styles.alignSelfContainer}>
                <View style={styles.caixaPequena}></View>
                <View style={[styles.caixaMedia, styles.selfCenter]}></View>
                <View style={[styles.caixaGrande, styles.selfEnd]}></View>
            </View>

            {/* EXEMPLO 5 */}
            <Text style={styles.titulo}>flexWrap</Text>

            <View style={styles.wrapContainer}>
                <View style={styles.caixaWrap}></View>
                <View style={styles.caixaWrap}></View>
                <View style={styles.caixaWrap}></View>
                <View style={styles.caixaWrap}></View>
                <View style={styles.caixaWrap}></View>  
                <View style={styles.caixaWrap}></View>
            </View>

            {/* EXEMPLO 6 */}
            <Text style={styles.titulo}>flex (1 / 2 / 3)</Text>

            <View style={styles.flexLinha}>
                <View style={[styles.flexBox, { flex:1}]}></View>
                <View style={[styles.flexBox, { flex:2}]}></View>
                <View style={[styles.flexBox, { flex:3}]}></View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    // Tela principal
    tela:{
        flex: 2,
        backgroundColor: "#F1F5F9",
        padding: 16,
    },
    titulo:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
        marginTop: 14,
    }, 
    // Exemplo 1
    linhaSpaceBetween:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#E2E8F0",
        padding: 10,
        // height: 200,
    },
    caixa:{
        width: 40,
        height: 40,
        backgroundColor: "#2563EB"
    },
    // Exemplo 2
    centerTudo:{
        height: 120,
        backgroundColor: "#E2E8F0",
        justifyContent: "center", //eixo principal
        alignItems: "center", //eixo cruzado
    },
    caixaGrande:{
        width: 80,
        height: 80,
        backgroundColor: "#22C55E",
        justifyContent: "center",
        alignItems: "center",
    },
    // Exemplo 3
    alignItens:{
        flexDirection: "row",
        alignItems: "flex-end",
        height: 120,
        backgroundColor: "#E2E8F0",
        gap: 8,
        padding: 10,
    },
    caixaPequena:{
        width: 30,
        height: 30,
        backgroundColor: "#F97316"
    },
    caixaMedia:{
        width: 30,
        height: 50,
        backgroundColor: "#F97316"
    },
    // Exemplo 4
    alignSelfContainer:{
        flexDirection: "row",
        height: 120,
        backgroundColor: "#E2E8F0",
        gap: 8,
        padding: 10,
    },
    selfCenter:{
        alignSelf: "center",
    },
    selfEnd:{
        alignSelf: "flex-end"
    },
    // Exemplo 5
    wrapContainer:{
        flexDirection: "row",
        backgroundColor: "#E2E8F0",
        gap: 8,
        padding: 10,
        flexWrap: "wrap",
    },
    caixaWrap:{
        width: 60,
        height: 40,
        backgroundColor: "#8B5CF6"
    },
    // Exemplo 6
    flexLinha:{
        flexDirection: "row",
        height: 60,
        backgroundColor: "#E2E8F0",
    },
    flexBox:{
        backgroundColor: "#0EA5E9",
        margin: 2,
    },

});

export default App;