import {Center, Heading, View, GluestackUIProvider, SelectTrigger, SelectInput, SelectIcon, Icon, SelectBackdrop, SelectContent, SelectDragIndicator, SelectItem, SelectPortal, Select, SelectDragIndicatorWrapper, ChevronDownIcon, Button, ButtonText } from '@gluestack-ui/themed'
import { config } from "@gluestack-ui/config"
import {StyleSheet, Text} from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import StyledBadImage from '../../components/StyledBadImage';
import { FontAwesome6, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';


export default function EditStatus(){
    const { id,status,toWalk } = useLocalSearchParams();

    return (
        <GluestackUIProvider config={config}>
             <Stack.Screen options={{ headerTitle: `Quarto N° ${id}` }} />
             <Center>
                <StyledBadImage srcImage='https://static.vecteezy.com/ti/vetor-gratis/p1/7695438-noite-aconchegante-quarto-interior-com-moveis-como-cama-guarda-roupa-de-cabeceira-mesa-vaso-lustre-em-estilo-moderno-em-cartoon-ilustracaoial-vetor.jpg'></StyledBadImage>
                <Text><MaterialCommunityIcons name="stairs-up" size={24} color="black" /> N° Andar: {id}  </Text>
                <Text><FontAwesome6 name="door-open" size={24} color="black" /> N° Quarto: {id}  </Text>
                <Text><FontAwesome6 name="bed" size={24} color="black" /> Camas: {id}  </Text>
                <Text><FontAwesome5 name="bath" size={24} color="black" />Banheiros: {id}  </Text>
                <Text><MaterialCommunityIcons name="file-cabinet" size={24} color="black" /> Outros moveis: {id}  </Text>
                <Select style={styles.title}>
  <SelectTrigger variant="outline" size="sm">
    <SelectInput placeholder="Pendente" />
    
  </SelectTrigger>
  <SelectPortal>
    <SelectBackdrop />
    <SelectContent>
      <SelectDragIndicatorWrapper>
        <SelectDragIndicator />
      </SelectDragIndicatorWrapper>
      <SelectItem label="Pendente" value="pendente" />
      <SelectItem label="Em serviço" value="servico" />
      <SelectItem
        label="Ocupado"
        value="ocupado"
      />
      <SelectItem label="Disponivel" value="disponivel" isDisabled={true} />
    </SelectContent>
  </SelectPortal>
</Select>

<Button style={styles.buttonAdd}
  size="md"
  variant="solid"
  action="primary"
  bgColor='green'
  isDisabled={false}
  isFocusVisible={false}
>
  <ButtonText>Salvar</ButtonText>
  
</Button>

             </Center>
    </GluestackUIProvider>
    )
}

const styles = StyleSheet.create({
    title:{
        padding: 20,
       width: 200,
       fontSize: 5,
    },
    buttonAdd:{
      display:'flex',
      width: 150,
    }
})