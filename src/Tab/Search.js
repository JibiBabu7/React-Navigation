import React, {Component} from "react";
import {View,Text,StyleSheet,TextInput,StatusBar,ImageBackground,TouchableHighlight,Image} from 'react-native'
 

export default class Search extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.firstView}>
                    <Text  style={styles.resourcesText}>Create Your</Text>
                    <Text  style={styles.Text}>Future...</Text>
                 {/* <TextInput placeholder='Search Here...'
               style={styles.search}> </TextInput> */}

                </View>
      <View style={styles.secondView}>
     
     
 
    <ImageBackground source={require('../../assets/first.jpg')}
    style={styles.Image}>

    </ImageBackground>
    </View>
       <View style={styles.thirdView}>
       <View style={styles.course}>
           <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                
             
                  <Image source={require('../../assets/c5.jpg')}
                       style={{height:40,
                       width:40,
                       borderRadius:100,
                       borderWidth:0.5,marginLeft:15,
                       marginTop:5}}></Image>
            </TouchableHighlight>
                    <Text style={{fontSize:18,
                                  fontWeight:'bold',
                                       color:'black',marginTop:6,marginLeft:8}}>Python</Text>
           
           </View>
           <View style={styles.course}>
           <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                
             
                  <Image source={require('../../assets/c6.png')}
                      style={{height:50,
                        width:50,
                        borderRadius:100,
                        borderWidth:0.5,marginLeft:15,
                        marginTop:5}}></Image>
            </TouchableHighlight>
                    <Text style={{fontSize:18,
                                  fontWeight:'bold',
                                       color:'black',marginTop:2,marginLeft:18}}>Java</Text>
           
           </View>
           <View style={styles.course}>
           <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                
             
                  <Image source={require('../../assets/c7.png')}
                      style={{height:40,
                        width:60,
                        borderRadius:100,
                        borderWidth:0.5,marginLeft:13,
                        marginTop:5}}></Image>
            </TouchableHighlight>
                    <Text style={{fontSize:18,
                                  fontWeight:'bold',
                                       color:'black',marginTop:6,marginLeft:20}}>PHP</Text>
           
           </View>
           <View style={styles.course}>
           <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                
             
                  <Image source={require('../../assets/c8.png')}
                      style={{height:45,
                        width:40,
                        borderRadius:100,
                        borderWidth:0.5,marginLeft:15,
                        marginTop:8}}></Image>
            </TouchableHighlight>
                    <Text style={{fontSize:18,
                                  fontWeight:'bold',
                                       color:'black',marginTop:4,marginLeft:15}}>HTML</Text>
           
           </View>
       </View>
     
       <View style={styles.fourthView}>
       <View style={styles.course}>
           <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                
             
                  <Image source={require('../../assets/c9.png')}
                      style={{height:40,
                        width:40,
                        borderRadius:100,
                        borderWidth:0.5,marginLeft:15,
                        marginTop:8}}></Image>
            </TouchableHighlight>
                    <Text style={{fontSize:18,
                                  fontWeight:'bold',
                                       color:'black',marginTop:6,marginLeft:28}}>C</Text>
           
           </View>
           <View style={styles.course}>
           <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                
             
                  <Image source={require('../../assets/c10.png')}
                       style={{height:40,
                        width:40,
                        borderRadius:100,
                        borderWidth:0.5,marginLeft:15,
                        marginTop:8}}></Image>
            </TouchableHighlight>
                    <Text style={{fontSize:18,
                                  fontWeight:'bold',
                                       color:'black',marginTop:6,marginLeft:18}}>C++</Text>
           
           </View>
           <View style={styles.course}>
           <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                
             
                  <Image source={require('../../assets/c11.png')}
                       style={{height:40,
                        width:45,
                        borderRadius:100,
                        borderWidth:0.5,marginLeft:15,
                        marginTop:8}}></Image>
            </TouchableHighlight>
                    <Text style={{fontSize:18,
                                  fontWeight:'bold',
                                       color:'black',marginTop:6,marginLeft:8}}>React</Text>
           
           </View>
           <View style={styles.course}>
           <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                
             
                  <Image source={require('../../assets/c12.png')}
                      style={{height:55,
                        width:40,
                        borderRadius:100,
                        borderWidth:0.5,marginLeft:15,
                        marginTop:5}}></Image>
            </TouchableHighlight>
                    <Text style={{fontSize:18,
                                  fontWeight:'bold',
                                       color:'black',marginLeft:8}}>SQL</Text>
           
           </View>
</View>

            </View>
        )
   }
} 



const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D4FBFA'
    },
    firstView:{
        height:'15%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
     flexDirection:'row',
       backgroundColor:'white'
       
    
      },
      secondView:{
        height:'35%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
       backgroundColor:'',
      
    
      },
      thirdView:{
        height:'25%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
       backgroundColor:'white',
       borderRadius:3
    
      },
     
      fourthView:{
        height:'25%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
       backgroundColor:'white'
    
    
      },
       search:{
           width:'90%',
           height:'35%',
           paddingLeft:30,
           fontSize:16,
           paddingHorizontal:15,
           backgroundColor:'#f7f3f3',marginTop:StatusBar.currentHeight,
           borderRadius:8,
           marginBottom:40
           
       },
   resourcesText:{
        fontSize:22,
        fontWeight:'bold',
        color:'#093422',
        marginRight:20
        
    },
    Text:{
        fontSize:24,
        fontWeight:'bold',
        color:'#34B6EB',marginRight:100
    },
   Image:{
        height:'100%',
        width:'100%'
    },
    
course:{

    width: '21%',
    height: '50%',
       backgroundColor:'white',
       color:'black',
       textAlign:'center',
       
       
       borderRadius:8,
      borderWidth:1,
     borderColor: 'black',
    //  marginTop:18,
     marginLeft:10,
    //  flexDirection:'row'
}  
})