import { Slot, Stack } from "expo-router";
import { View, Text } from "react-native";

const RootLayout = () => {
    return (
        // <View style={{ paddingTop: 50 }}>
        //     <Text>Header</Text>
        //     <Slot />
        //     <Text>Footer</Text>
        // </View>
        <Stack>
            <Stack.Screen
                name="index"
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="(tabs)"
                options={{headerTitle: "Trang chu"}}
            />
        </Stack>
    )
};
export default RootLayout;