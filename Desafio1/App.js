import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function App() {
    return (
        <View style={{padding: 30}}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Item de la lista'
                    placeholderTextColor={"#ff0000"}
                    style={styles.input}
                />
                <Button title='ADD' color={"#ff0000"} />
            </View>
            <View style={styles.listContainer}>

                <View style={styles.TextContainer}>
                    <Text style={styles.Text}>Item 1</Text>
                </View>

                <View style={styles.TextContainer}>
                    <Text style={styles.Text}>Item 2</Text>
                </View>

                <View style={styles.TextContainer}>
                    <Text style={styles.Text}>Item 3</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: "#ff0000",
        borderBottomWidth: 1,
        width: 200,
        height: 50,
        color: "#ff0000",
        fontSize: 20,
        paddingLeft: 12,
    },
    listContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#ff0000",
        borderWidth: 2,
        marginTop: 40,
    },
    TextContainer: {
        borderColor: "#ff0000",
        alignItems: 'center',
        borderWidth: 2,
        marginVertical: 20,
        padding: 10,
        width: "90%",
    },
    Text: {
        fontSize: 24,
        color: "#ff0000",
        fontWeight: 'bold',
    }
})
