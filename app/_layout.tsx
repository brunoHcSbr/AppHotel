import { Slot, Stack} from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { AuthProvider } from './hooks/auth'
 
export default function Layout(){
    return (
        <AuthProvider>
        <GluestackUIProvider config={config}>
            <Stack>
                <Stack.Screen name='(tabs)' />
            </Stack>
        </GluestackUIProvider>
        </AuthProvider>
    )
}