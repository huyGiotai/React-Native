import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
    totoInput: {
        borderColor: 'violet',
        borderWidth: 1,
        padding: 10,
        // marginBottom: 20,
        borderRadius: 5,
    }
})
interface IProps {
    addTodo: (v: string) => void;
}

const InputTodo = (Props: IProps) => {
    const [name, setName] = useState('');
    const { addTodo } = Props;

    const handleAddNewTodo = () => {
        if (!name) {
            Alert.alert(
                'Please enter todo',
                'You need enter todo tittle',
                // [
                //     {
                //         text: 'Cancel',
                //         onPress: () => Alert.alert('Cancel Pressed'),
                //         style: 'cancel',
                //     },
                // ],
            );
            return;
        }
        addTodo(name);
        setName('');
    }
    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    onChangeText={value => setName(value)}
                    value={name}
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline
                    style={styles.totoInput}
                />

            </View>
            <MineButton
                tittle="Add New"
                onPress={handleAddNewTodo}
            />
        </>
    )
}

export default InputTodo;