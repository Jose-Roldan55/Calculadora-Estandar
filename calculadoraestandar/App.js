import React,{useState}from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

export default function App() {
  const [disOperacion,setOperacion] = useState('');
  const [disResultado,setResultado] = useState('');

  const limpiar = () =>{
    setOperacion('');
    setResultado('');
  };

  const datos=(value)=>{
    setOperacion(disOperacion + value);
  };

  return(
    <View style={estilos.ppal}>
     <View style={estilos.display}>
     <View>
     <Text style={[estilos.txtBtnL,{textAlign: 'right',fontSize:20}]}>
     {disOperacion}
     </Text>
     </View>
     <View style={{flex:1,flexDirection: 'row'}}>
     <View 
     style= {{
       flex:1,
       alignItems:'flex-start',
       justifyContent:'center',
     }}>
     <Text style={estilos.txtBtnL}>R</Text>
     </View>
     <View 
     style={{
       flex:8,
       alignItems:'flex',
       justifyContent:'center',
     }}>
     <Text style={estilos.txtBtnL}>{disResultado}</Text>
     </View>
     </View>
     </View>
     <View style={estilos.panel}>
     <View style={{flex:4}}>
     <View style={estilos.renglon}>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('7')}}>
     <Text style={estilos.txtBtnL}>7</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('8')}}>
     <Text style={estilos.txtBtnL}>8</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('9')}}>
     <Text style={estilos.txtBtnL}>9</Text>
     </TouchableOpacity>
     </View>
     <View style={estilos.renglon}>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos('4')}}>
     <Text style={estilos.txtBtnL}>4</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('5')}}>
     <Text style={estilos.txtBtnL}>5</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('6')}}>
     <Text style={estilos.txtBtnL}>6</Text>
     </TouchableOpacity>
     </View>
     <View style={estilos.renglon}>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('1')}}>
     <Text style={estilos.txtBtnL}>1</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('2')}}>
     <Text style={estilos.txtBtnL}>2</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('3')}}>
     <Text style={estilos.txtBtnL}>3</Text>
     </TouchableOpacity>
     </View>
     <View style={estilos.renglon}>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('-')}}>
     <Text style={estilos.txtBtnL}>-</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('0')}}>
     <Text style={estilos.txtBtnL}>0</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnNum} onPress={()=>{datos ('.')}}>
     <Text style={estilos.txtBtnL}>.</Text>
     </TouchableOpacity>
     </View>
     </View>
     
     <View style={{flex:1}}>
     <TouchableOpacity style={estilos.btnOp} onPress={()=>{datos ('+')}}>
     <Text style={estilos.txtBtn}>+</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnOp} onPress={()=>{datos ('-')}}>
     <Text style={estilos.txtBtn}>-</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnOp} onPress={()=>{datos ('*')}}>
     <Text style={estilos.txtBtn}>×</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnOp} onPress={()=>{datos ('/')}}>
     <Text style={estilos.txtBtn}>÷</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnOp} onPress={()=>{datos ('**')}}>
     <Text style={estilos.txtBtn}>^</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnOp} onPress={()=>{limpiar ()}}>
     <Text style={estilos.txtBtn}>C</Text>
     </TouchableOpacity>
     <TouchableOpacity style={estilos.btnOp} onPress={()=>{setResultado(eval(disOperacion))}}>
     <Text style={estilos.txtBtn}>=</Text>
     </TouchableOpacity>
     </View>
     </View>
     </View>
  );
}
const estilos=StyleSheet.create({
  ppal:{flex:1,backgroundColor:'#18EFFD'},
  display: {flex:2,borderWidth: 2,borderBlockColor:'white',borderRadius:15},
  panel:{flex: 8,flexDirection:'row'},
  btnOp:{
    flex:4,
    borderWidth:1,
    margin:2,
    borderColor:'#F8B12B',
    backgroundColor:'#F8B12B',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },

  btnNum:{
    flex:1,
    borderWidth:1,
    margin:2,
    borderColor:'#29A7FE',
    backgroundColor:'#29A7FE',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  txtBtn:{color:'black',fontWeight: 'bold',fontSize:40},
  txtBtnL:{color:'white',fontWeight:'bold',fontSize:40},
  renglon:{flex:1,margin:2,flexDirection:'row'},
})