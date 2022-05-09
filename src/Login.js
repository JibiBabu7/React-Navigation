import React,{Component} from 'react';
import {  
  View, 
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {
  render(){
    return (
 <View style={styles.container}>
     <View style={{height:'55%'}}>
        <ImageBackground source={require('../assets/c1.jpg')}
            style={styles.backgroundImage}>
       <Image source={require('../assets/c2.png')}
            style={styles.logo}>

       </Image>
       <Text style={styles.textView}>WELCOME</Text>
       
       </ImageBackground>
    </View>


        <View style={{height:'55%',flexDirection:'row'}}>
        <ImageBackground source={require('../assets/c3.jpg')}
     style={styles.backgroundImage}>
        
         <TextInput  style={styles.textInput}
       placeholder='Username/Email'
       maxLength={10}>

       </TextInput>

       <TextInput  style={styles.txtInput}
       placeholder='Password'
       placeholderTextColor= 'grey'
       secureTextEntry={true}
       maxLength={10}>

       </TextInput>
       <Text style={{marginBottom:80}}> Remind Me!                    Forgot Password?</Text>

       <TouchableHighlight  style={styles.buttonView}
        // onPress={()=> this.props.navigation.navigate('Drawer')}
        >
         <Text style={styles.buttonText}underlayColor = 'transparent'
            onPress={()=> this.props.navigation.navigate('Drawer')}

            
            
         >Login</Text>
       </TouchableHighlight>
       
       {/* <TouchableHighlight>
         <Text underlayColor = 'transparent'
            onPress={()=> this.props.navigation.navigate('Tab')}
         >Login</Text>
       </TouchableHighlight> */}
       
       </ImageBackground>
        </View>
     </View>
     
    )

  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%', width:'100%', backgroundColor:'#fff'
  },
  backgroundImage: {
    height:'100%',
    width:'100%',
     alignItems: 'center',
     justifyContent: 'center',
    
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius:20,
    marginTop:160
    
    
  },
  textView: {
    fontSize:17,
    fontWeight: 'bold',
    color: '#8B74A9 ',
    marginTop:20
  
    },
    
 textInput:{

    backgroundColor:'',
    width:'80%',
    height:55,
    borderRadius:8,
    borderWidth:1,
    borderColor:'#BAC398',
    paddingLeft:15,
    marginBottom:10
    // justifyContent:'center',
    // alignItems:'center'
    

  },
  txtInput:{

    backgroundColor:'',
    width:'80%',
    height:55,
    borderRadius:8,
    borderWidth:1,
    borderColor:'#BAC398',
    paddingLeft:15,
    marginBottom:15
    // justifyContent:'center',
    // alignItems:'center'
    

  },
  
  buttonView: {
    width: '80%',
    height: 50,
    backgroundColor: '#8FD7E8',
    
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:190
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D3DDDF '
  }
 
})