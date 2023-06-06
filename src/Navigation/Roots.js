import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../Common/Routes';
import Home from '../Screens/Home/Home'
import User from '../Screens/User/User'


const Stack = createNativeStackNavigator();
const Roots = () => {
    return <>
        <Stack.Navigator>
            <Stack.Screen
                name={routes.home}
                component={Home}
                options={{
                    headerTitle: "Home",
                    headerStyle: { backgroundColor: 'teal' },
                    headerTintColor: "#fff",
                    headerTitleAlign: "left",
                    headerTitleStyle: {
                        fontSize: 22
                    }
                }}
            ></Stack.Screen>
            <Stack.Screen name={routes.user} component={User}
                options={{
                    headerTitle: "User Details",
                    headerStyle: { backgroundColor: 'teal' },
                    headerTintColor: "#fff",
                    headerTitleAlign: "left",
                    headerTitleStyle: {
                        fontSize: 22
                    }
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    </>
}
export default Roots