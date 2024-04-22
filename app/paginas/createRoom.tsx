import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';
import { Stack, useLocalSearchParams } from 'expo-router' 


const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;
 
const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`;
 
const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
`;
 
const ButtonContainer = styled.View`
  margin-top: 20px;
`;


export default function CreateRoom(){

    const [andar, setAndar] = useState('');
  const [numeroQuarto, setNumeroQuarto] = useState('');
  const [numeroCamas, setNumeroCamas] = useState('');
  const [numeroBanheiros, setNumeroBanheiros] = useState('');
  const [numeroOutrosMoveis, setNumeroOutrosMoveis] = useState('');
 
    
  
    return (
        <Container>
          <Stack.Screen options={{ headerTitle: `Adiconar um quarto` }} />
      <Label>Andar:</Label>
      <Input value={andar} onChangeText={setAndar} />
 
      <Label>Número do Quarto:</Label>
      <Input value={numeroQuarto} onChangeText={setNumeroQuarto} />
 
      <Label>Número de Camas:</Label>
      <Input value={numeroCamas} onChangeText={setNumeroCamas} />
 
      <Label>Número de Banheiros:</Label>
      <Input value={numeroBanheiros} onChangeText={setNumeroBanheiros} />
 
      <Label>Número de Outros Móveis:</Label>
      <Input value={numeroOutrosMoveis} onChangeText={setNumeroOutrosMoveis} />
 
      <ButtonContainer>
        <Button title="Cadastrar" />
      </ButtonContainer>
    </Container>
    )
}