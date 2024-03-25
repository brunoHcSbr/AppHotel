import {Heading, View, GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from "@gluestack-ui/config"
import {StyleSheet} from 'react-native'

export default function changeStatus(){
    

    return (
        <GluestackUIProvider config={config}>
             
    </GluestackUIProvider>
    )
}

const styles = StyleSheet.create({
    title:{
       padding:70,
    },
})