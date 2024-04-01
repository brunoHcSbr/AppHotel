import {Center, Heading, View, GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from "@gluestack-ui/config"
import {StyleSheet, Text} from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import StyledBadImage from '../../components/StyledBadImage';
import { FaBed } from "react-icons/fa6";

export default function EditStatus(){
    const { id } = useLocalSearchParams();

    return (
        <GluestackUIProvider config={config}>
             <Stack.Screen options={{ headerTitle: `Quarto N° ${id}` }} />
             <Center>
                <StyledBadImage srcImage='https://static.vecteezy.com/ti/vetor-gratis/p1/7695438-noite-aconchegante-quarto-interior-com-moveis-como-cama-guarda-roupa-de-cabeceira-mesa-vaso-lustre-em-estilo-moderno-em-cartoon-ilustracaoial-vetor.jpg'></StyledBadImage>
                <Text> My ID is {id} <FaBed size={40} color='red' /> </Text>
             </Center>
    </GluestackUIProvider>
    )
}

const styles = StyleSheet.create({
    title:{
       padding:70,
    },
})