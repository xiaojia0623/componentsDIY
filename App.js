import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Slider from '@react-native-community/slider'
//components
import ChangeButton from './src/components/Button/changgButton'

//styles
import textStyles from './src/styles/textStyles'
import { useState } from 'react'
import buttonStyles from './src/styles/buttonStyles'

export default function App() {
  //輸入的文字，顏色，輸入的情況
  const [diyText, setDiyText] = useState('')
  const [color, setColor] = useState('')
  const [inputState, setInputState] = useState(false)

  //調整的文字大小
  const [myFontSize, setMyFontSize] = useState(16)


  const handleFontSizeChange = (value) => {
    setMyFontSize(value);
  };
 

  const clickMyBtn = () =>{
    if(diyText !== '' && color !== ''){
      setInputState(true)
    }else{
      setInputState(false)
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FF7F50', 'transparent']}
        style={styles.background}
      />
      <Text style={textStyles.title}>製作DIY 按鈕</Text>
      <Text style={textStyles.labelText}>顯示的按鈕文字</Text>
      <TextInput style={textStyles.inputStyle} placeholder='請輸入文字' onChangeText={(text) => setDiyText(text)}></TextInput>
      <Text style={textStyles.labelText}>顯示的按鈕顏色</Text>
      <TextInput style={[textStyles.inputStyle]} placeholder='請輸入顏色(小寫英文)' onChangeText={(color) => setColor(color)} ></TextInput>

      <Text style={textStyles.label}>Font Size: {myFontSize}px</Text>
      <Slider
        style={{ width: '80%', marginTop: 20 }}
        minimumValue={16}
        maximumValue={30}
        step={1}
        value={myFontSize}
        onValueChange={handleFontSizeChange}
      />


      <ChangeButton myStyle={buttonStyles.btnStyle} title={'Click Me'} myColor="#FF7F50" onMyPress={() => clickMyBtn()}/>

      <Text style={[textStyles.title, {marginBottom:5}]}>下方成果</Text>
      {
        inputState === true ? <ChangeButton myStyle={[buttonStyles.textBtn]}  myColor={color} title={diyText}/> : <Text></Text>
      }

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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
});
