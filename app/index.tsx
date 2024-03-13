import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'
import { router } from 'expo-router'
import { Box,Input, InputField, Text, Button, ButtonText } from '@gluestack-ui/themed'
import { Entypo } from '@expo/vector-icons'

export default function Login() {
  const handleLogin = () => {
    router.push('home')
  }

  return (
    <View style={styles.container}>
      
      

      <Image style={styles.loginImage} source={{
          uri: 'https://img.freepik.com/vetores-premium/design-hotel-ficar-isolado-ilustracoes-vetoriais-de-desenhos-animados_107173-22709.jpg',
        }}></Image>
      
      <Input style={styles.containerInput} variant='underlined' size='md' mb={8}>
        <InputField placeholder='Digite o seu e-mail' />
      </Input>

      <Input style={styles.containerInputPassowrd} variant='underlined' size='md' mb={8}>
        <InputField type='password' placeholder='Digite a sua senha' />
      </Input>
      
      <Button  variant="solid"
      bg="#00a2ff"
      $active-bg="#db02a5" onPress={handleLogin} >
        <ButtonText style={styles.button}> Entrar</ButtonText>
      </Button>

      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput:{
    margin: 20,
  },
  loginImage:{
    width:  200,
    height: 200,
  },
  containerInputPassowrd:{
    margin: 20,
    marginBottom: 70,
  },
  button:{
    margin: 10,
  },
  tinyLogo:{
    width: 100,
    height: 100
  }
});
