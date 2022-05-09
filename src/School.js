import React, {Component, useState} from "react";

import {
  View,
  StyleSheet,
  Modal,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
}from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
export default class School extends  Component {
  render(){
    
    return (
        <View style= {styles.container}>
          <View style={styles.firstView}>
        
              <ImageBackground source={require('../assets/k.jpg')}
              style={styles.firstImage}> 

             </ImageBackground>
              <Text style={styles.studentText}> Select your school board</Text>
          </View>
          <View style={styles.secondView}>
          
          <ImageBackground source={require('../assets/n.jpg')}
              style={styles.secondImage}> 
              <Text style={styles.boardName}


>   Select Board   <Icon   

name="chevron-right"
size={26}
color='grey'
thin={false}

style={{marginLet:10, marginTop:100}}>


</Icon>

</Text>

<Text style={styles.class}
 >     Select Class   
  <Icon   

 name="chevron-right"
 size={26}
 color='grey'
 thin={false}
 
 style={{marginLet:100, marginTop:100}}>
 
 
 </Icon>

</Text>

<TouchableHighlight style={styles.registerButton}
  underlayColor = 'transparent'
  onPress={()=> this.props.navigation.navigate('Profile')}>
        <Text style= {styles.ContinueText}>Continue</Text>
      </TouchableHighlight>
 </ImageBackground>

          </View>
       </View>
      
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height:'100%',
     width:'100%', 
    backgroundColor:'white'

  },
  firstView:{
    height:'64%',
    width:'100%', 
   backgroundColor:'white',
   alignItems: 'center',
   justifyContent: 'center',
   

  },
  secondView:{height:'36%',
  width:'100%', 
 backgroundColor:'white',
 borderRadius:8,
 borderWidth:1.5,
 alignItems: 'center',
 justifyContent: 'center',
 

  },
  firstImage:{
    height:'100%',
    width:'90%',
    marginTop:11
  
},
  secondImage:{
    height:'100%',
    width:'100%',
  },
  studentText:{
    fontSize:20,
    fontWeight: 'bold',
    color: '#101f3d',
    marginBottom:50
    
  },
  boardName:{
    width: '90%',
height: '20%',
   backgroundColor:'#101f3d',
   
   borderRadius:8,
  borderWidth:0.5,
 borderColor: 'grey',
 marginLeft:20,
 marginTop:30,
 color:'grey',


},
class:{
    width: '90%',
height: '20%',
   backgroundColor:'#101f3d',
   
   borderRadius:8,
  borderWidth:0.5,
 borderColor: 'grey',
 marginLeft:20,
 marginTop:15,
 color:'grey'

},

registerButton:{
    width: '90%',
    height: '23%',
    backgroundColor: 'green',
    marginLeft:20,
    marginTop:15,
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
 
},
ContinueText:{
 
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
},
countryDropdown:{
  position:'absolute',
  width:80,
  height:50,
  marginLeft:20,
  borderRadius:10,
  borderWidth:0.5,
  zIndex:3
,
text:{
  marginVertical:20,
  fontSize:25
},
touchableOpacity:{
  backgroundColor:'orange',
  alignSelf:'stretch',
  paddingHorizontal:20
}
}
})