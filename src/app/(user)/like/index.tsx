import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native"

const Like = () => {
    const navigate: any = useNavigation();
    return (
        <View>
            <Text>Like</Text>
            <Button
                title="Go to Like Details"
                onPress={() => navigate.navigate("LikeDetail")} />
        </View>
    )
}
export default Like;