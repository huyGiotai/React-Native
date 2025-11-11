import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
      
        justifyContent: 'center', 
        flexDirection: 'column',
     
    },

    item1: {
        borderWidth: 1,
        backgroundColor: 'yellow',
        padding: 20,
        // height: 250,
        flex: 2,
        width: 250,
    },

    item2: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'green',
        padding: 20,
        // height: 300,
        width: 300,
    },

    item3: {
        borderWidth: 1,
        backgroundColor: 'red',
        padding: 20,
        // height: 100,
        flex: 1,
        width: 100,
    },

    item4: {
        borderWidth: 1,
        backgroundColor: '#ccc',
        padding: 20,
    },
})


const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Item 1</Text>
            </View>

            <View style={styles.item2}>
                <Text>Item 2</Text>
            </View>

            <View style={styles.item3}>
                <Text>Item 3</Text>
            </View>

            <View style={styles.item4}>
                <Text>Item 4</Text>
            </View>

        </View>
    )
};

export default FlexBox;