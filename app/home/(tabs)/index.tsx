import { Text } from 'react-native'
import { Link } from 'expo-router'
import {
    StyleSheet,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
  } from 'react-native';

export default function Home(){
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
        <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });
  