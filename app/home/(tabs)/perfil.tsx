import {Text, View} from '@gluestack-ui/themed'
import StyledUserImage from '../../../components/StyledUserImage'
import {StyleSheet} from 'react-native'
 
export default function Perfil(){
    return (
        <View style={styles.containerPerfil} flex={1}
        justifyContent='center'
        alignItems='center'
        >
         
          <StyledUserImage srcImage='https://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg'></StyledUserImage>
         
        </View>
    )
}
 
const styles = StyleSheet.create({
    containerPerfil:{
        flex: 1,
        alignItems: 'center',
        fontWeight: 'bold',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
       
        elevation: 24,
    },
   
})