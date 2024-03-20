import {Image,StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
 
 
interface StyledImageProps {
    srcImage: string
   
}
 
export default function StyledUserImage(
    {srcImage}:StyledImageProps
){
    return (
        <Image
        style={styles.userImage}
        source={{
            uri: srcImage,
          }}
      />
    )
}
 
const styles = StyleSheet.create({
    userImage:{
        alignItems: 'center',
        width: 120,
        height: 120,
        fontWeight: 'bold',
        borderRadius: 100,
    },
   
})