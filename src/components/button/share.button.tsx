import { View, Text, StyleSheet, Pressable, StyleProp, TextStyle } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import { ReactNode } from "react";
import { APP_COLOR } from "utils/constant";

const styles = StyleSheet.create({
    btnContainer: {
      
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: APP_COLOR.ORANGE,

    },

    text: {
        textTransform: 'uppercase',
        
    }
})

interface IProps {
    tittle: string;
    onPress: () => void;

    textStyle?: StyleProp<TextStyle>;
    pressStyle?: StyleProp<TextStyle>;
    btnStyle?: StyleProp<TextStyle>;
    icons?: ReactNode,
}

const ShareButton = (props: IProps) => {
    const { tittle, onPress, textStyle,
         pressStyle, btnStyle, icons } = props;
    return (
        <Pressable
            style={({ pressed }) => ([{
                alignSelf: 'flex-start',
                opacity: pressed ? 0.5 : 1
            }, pressStyle])}
            onPress={onPress}
        >
            <View style={[styles.btnContainer, btnStyle]}>
                {icons}

                <Text
                    style={ textStyle}>
                    {tittle}
                </Text>
            </View>
        </Pressable>
    )
}

export default ShareButton;