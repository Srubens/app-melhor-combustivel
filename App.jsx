import React, { useState } from 'react'
import { View, TextInput, Text, Button, StyleSheet } from 'react-native'

const App = () =>{
    const [etanol, setEtanol] = useState('');
    const [gasolina, setGasolina] = useState('');
    const [resultado, setResultado] = useState('');

    const Separator = () =>{
        return <View style={styles.separator} />
    }

    const limparDados = () =>{
        setEtanol('')
        setGasolina('')
        setResultado('')
    }

    const calcularMelhorOpcao = () => {
        // const precoGasolina = parseFloat(gasolina) * 0.7
        const result = parseFloat(etanol) / parseFloat(gasolina)
    
        if (result <= 0.7) {
          setResultado('Compensa abastecer com etanol');
        } else {
          setResultado('Compensa abastecer com gasolina');
        }
      }

    return(
        <>
        <View style={styles.mainView} >
            <View>
            <Text style={styles.mainText} >Valor do etanol:</Text>
            <TextInput 
                style={styles.mainInput}
                onChangeText={setEtanol}
                value={etanol}
                keyboardType="numeric"
            />
            <Text style={styles.mainText} >Valor da gasolina:</Text>
            <TextInput
                style={styles.mainInput}
                placeholder='Insira o valor da gasolina aqui.'
                onChangeText={setGasolina}
                value={gasolina}
                keyboardType="numeric"
            />
            <Separator/>
            <Button style={styles.mbtn1} title="Calcular" onPress={calcularMelhorOpcao} />
            <Separator/>
            <Button style={styles.mbtn2} title="Limpar" onPress={() => limparDados()} />
            <Text style={styles.mainTextResult} >{resultado}</Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff',
        flex:1,
        padding:15
    },
    mainText:{
        color:'#000',
        marginTop:30
    },
    mainTextResult:{
        color:'#000',
        textAlign:'center',
        marginTop:40,
        fontSize:20
    },
    mainInput:{
        borderColor:'#000',
        padding:10,
        margin:10,
        height:40,
        borderWidth:1,
        color:'#000'
    },
    mbtn1:{
        padding:10,
        flex:2
    },
    mbtn2:{
        marginTop:80,
        flex:2
    },
    separator:{
        marginVertical:15
    }
})

export default App