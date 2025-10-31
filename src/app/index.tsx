import TextBetweenLine from "@/components/button/text.between.line";
import { Link, Redirect, router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAccountAPI } from "@/utils/api";
import { useCurrentApp } from "@/context/app.context";
import { useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootPage = () => {

    const { setAppState } = useCurrentApp();
    const [state, setState] = useState<any>();

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                const res = await getAccountAPI();

                if (res.data) {
                    //success
                    setAppState({
                        user: res.data.user,
                        access_token: await AsyncStorage.getItem("access_token")
                    })
                    router.replace("/(tabs)")
                } else {
                    router.replace("/(auth)/welcome")
                }
            } catch (e) {
                // console.log("Khong the ket noi toi API Backend")
                // console.warn(e);
                setState(() => {
                    throw new Error("Khong the ket noi toi API Backend")
                });
            } finally {
                // Tell the application to render
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    // if (true) {
    //     return (
    //         <Redirect href={"/(tabs)"} />
    //     )
    // }

    return (
        <>
        
        </>
    );
};

export default RootPage;