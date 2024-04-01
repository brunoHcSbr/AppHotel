import {Image,StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
 
 
interface StyledImageProps {
    srcImage: string
   
}
 
export default function StyledBadImage(
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
        width: 400,
        height: 250,
        fontWeight: 'bold',
        marginBottom: 50,
    },
   
})