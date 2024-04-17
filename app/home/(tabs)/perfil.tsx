import {Text, View} from '@gluestack-ui/themed'
import StyledUserImage from '../../../components/StyledUserImage'
import {StyleSheet} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
export default function Perfil(){
    return (
        <View style={styles.containerPerfil} flex={1}
        justifyContent='center'
        alignItems='center'
        >
       
          <StyledUserImage srcImage='https://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg'></StyledUserImage>
          
          
          <View style={{ marginTop: 70 }}></View>

          <View style={styles.userInfoContainer}>
                <View style={styles.userInfo}>
                    <FontAwesome5 name="user-edit" size={24} color="#007bff" style={styles.icon} />
                    <Text style={styles.userInfoText}> Nome do Usuário</Text>
                </View>
                <View style={styles.userInfo}>
                    <FontAwesome5 name="lock" size={24} color="#007bff" style={styles.icon} />
                    <Text style={styles.userInfoText}>   Cargo do Usuário</Text>
                </View>
                <View style={styles.userInfo}>
                    <FontAwesome5 name="lock" size={24} color="#007bff" style={styles.icon} />
                    <Text style={styles.userInfoText}>   ID do Usuário</Text>
                </View>
            </View>

        </View>
    )
}
 
const styles = StyleSheet.create({
    containerPerfil: {
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
    userInfoContainer: {
        marginTop: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userInfoText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 10,
    }
})