import { Tabs } from "expo-router"
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from "@gluestack-ui/config"
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

export default function TabLayout(){
    return (
        <GluestackUIProvider config={config}>
            <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
                <Tabs.Screen
                name='index'
                options={
                    {  
                        title: 'Tarefas',
                        tabBarIcon: ({color}) => <FontAwesome name='home' size={28} color={color} />
                    }
                } />
                <Tabs.Screen
                name='perfil'
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({color}) => <AntDesign name="user" size={28} color={color} />
                }} />
            </Tabs>
        </GluestackUIProvider>
    )
}