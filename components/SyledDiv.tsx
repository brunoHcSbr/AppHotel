import {View, Text,StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'


interface StyledDivProps {
    roomNumer: string
    toWalk: string
    statusRoom: string
    colorStatus: string
}

export default function StyledDiv(
    {roomNumer,toWalk,statusRoom,colorStatus}:StyledDivProps
){
    return (
       <View style={styles.fistContainer}>
           
            <Text style={styles.titleContainer}>{toWalk}</Text>
              <Text style={styles.roomNumberContainer}>{roomNumer}</Text>
                <Text style={styles.statusRoomContainer}>{statusRoom} <Entypo name="flickr-with-circle" size={14} color={colorStatus} /></Text>
               
        </View> 
    )
}

const styles = StyleSheet.create({
    titleContainer:{
        alignItems: 'center',
        right: 90,
        fontSize: 15,
        fontWeight: 'bold',
    },
    roomNumberContainer:{
        alignItems: 'center',
        right: 80,
    },
    statusRoomContainer:{
        alignItems: 'center',
        left: 80,
        fontWeight: 'bold',
    },
    fistContainer: {
       backgroundColor: 'white',
       height: 80,
       alignItems: 'center',
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