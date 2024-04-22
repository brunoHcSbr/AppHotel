import { Text } from 'react-native'
import { Link, router } from 'expo-router'
import StyledDiv from '../../../components/SyledDiv';
import { AddIcon, Button, ButtonIcon, ButtonText, Input, InputField } from '@gluestack-ui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from "react"

import {
    StyleSheet,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
  } from 'react-native';

  interface IPost {
    id: number
    toWalk: number
    statusRoom: string
    bed: number
    bath: number
}


export default function Home(){

  const changeStatus = (id: number, status: String, toWalk: String) => {
    router.push(`../../paginas/${id}`)
  }

  const [list, setList] = useState<IPost[]>([])

  useEffect(() => {
      fetch('')
          .then(response => response.json())
          .then(json => setList(json))
  }, [])

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

{list.map((item, index) => (
                <StyledDiv onPress={ () => { changeStatus(202,"Pendente","Primeiro Andar") }} toWalk={item.toWalk} roomNumer={item.id} statusRoom={item.statusRoom} colorStatus='red'></StyledDiv>
            ))}

      {/*<StyledDiv onPress={ () => { changeStatus(202,"Pendente","Primeiro Andar") }} key={index} toWalk='Primeiro Andar' roomNumer='N° 202' statusRoom='Pendente' colorStatus='red'></StyledDiv>
       <StyledDiv onPress={() => { changeStatus(203,"Em Serviço","Segundo Andar") }} toWalk='Segundo Andar' roomNumer='N° 202' statusRoom='Em Serviço' colorStatus='yellow'></StyledDiv>
       <StyledDiv onPress={() => { changeStatus(204,"Disponivel","Terceiro Andar") }} toWalk='Terceiro Andar' roomNumer='N° 202' statusRoom='Disponivel' colorStatus='green'></StyledDiv>
     
          */}


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
  