import { Text } from 'react-native'
import { Link, router } from 'expo-router'
import StyledDiv from '../../../components/SyledDiv';
import { AddIcon, Button, ButtonIcon, ButtonText, Input, InputField } from '@gluestack-ui/themed';
import { AntDesign } from '@expo/vector-icons';

import {
    StyleSheet,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
  } from 'react-native';



export default function Home(){

  const changeStatus = (id: number, status: String, toWalk: String) => {
    router.push(`../../paginas/${id}`)
  }

    const DATA = [
        {
          title: '1° Andar',
          data: ['N°01', 'N°02', 'N°03'],
        },
        {
          title: '2° Andar',
          data: ['N°04', 'N°05', 'N°06'],
        },
        {
          title: '3° Andar',
          data: ['N°07', 'N°08', 'N°09'],
        },
        {
          title: '4° Andar',
          data: ['N°10', 'N°11'],
        },
      ];

    return (
        <>
        <Input style={styles.container}
  variant="underlined"
  size="md"
  isDisabled={false}
  isInvalid={false}
  isReadOnly={false}
>
<AntDesign style={styles.icone} name="search1" size={24} color="black" />
  <InputField placeholder="  Buscar" />
  
</Input>

<Button style={styles.buttonAdd}
  size="md"
  variant="solid"
  action="primary"
  bgColor='green'
  isDisabled={false}
  isFocusVisible={false}
>
  <ButtonText>Adicionar </ButtonText>
  <ButtonIcon as={AddIcon} />
</Button>

       <StyledDiv onPress={ () => { changeStatus(202,"Pendente","Primeiro Andar") }} toWalk='Primeiro Andar' roomNumer='N° 202' statusRoom='Pendente' colorStatus='red'></StyledDiv>
       <StyledDiv onPress={() => { changeStatus(203,"Em Serviço","Segundo Andar") }} toWalk='Segundo Andar' roomNumer='N° 202' statusRoom='Em Serviço' colorStatus='yellow'></StyledDiv>
       <StyledDiv onPress={() => { changeStatus(204,"Disponivel","Terceiro Andar") }} toWalk='Terceiro Andar' roomNumer='N° 202' statusRoom='Disponivel' colorStatus='green'></StyledDiv>
     
      

        </>
    )
}

const styles = StyleSheet.create({
    container: {
      display:'flex',
      backgroundColor: 'white',
    
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 20,
      shadowColor: "#000",
    borderRadius:20,
shadowOffset: {
 width: 0,
 height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
    },
    icone: {
      paddingLeft: 5,
    },
    buttonAdd:{
      marginLeft: 20,
      display:'flex',
      width: 150,
    }
  });
  