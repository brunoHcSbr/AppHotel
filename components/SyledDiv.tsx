import {View, Text,StyleSheet} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import {Button , EditIcon, ButtonIcon, ButtonText, Center } from '@gluestack-ui/themed';


interface StyledDivProps {
    roomNumer: string
    toWalk: string
    statusRoom: string
    colorStatus: string
    onPress: () => void
}

export default function StyledDiv(
    {onPress,roomNumer,toWalk,statusRoom,colorStatus}:StyledDivProps
){
    return (
       <>

<Center style={styles.fistContainer}>
    <Center>
<Text style={styles.titleContainer}>{toWalk}</Text>
              <Text style={styles.roomNumberContainer}>{roomNumer}</Text>
                   
                <Text style={styles.statusRoomContainer}>{statusRoom} <Entypo name="flickr-with-circle" size={14} color={colorStatus} /></Text>

                </Center>
    <Center style={styles.button}>
                <Button
  size="xs"
  variant="outline"
  action="primary"
  isDisabled={false}
  isFocusVisible={false}
onPress={onPress}
  
>
  <ButtonText>Editar </ButtonText>
  <ButtonIcon as={EditIcon} />
    </Button>
    </Center>

</Center>
</>
    )
}

const styles = StyleSheet.create({
    button:{
       bottom: 15,
       left: 60,
    },
    titleContainer:{
        alignItems: 'center',
        right: 60,
        fontSize: 15,
        fontWeight: 'bold',
    },
    roomNumberContainer:{
        alignItems: 'center',
        right: 75,
    },
    statusRoomContainer:{
        alignItems: 'center',
        left: 80,
        fontWeight: 'bold',
    },
    fistContainer: {
       display:'flex',
       backgroundColor: 'white',
       height: 80,
       alignItems: 'center',
       flexDirection: 'row',
       justifyContent: 'center',
       margin: 20,
       shadowColor: "#000",
       borderRadius: 15,
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
    }
})