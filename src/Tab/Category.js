import React, {Component} from "react";
import {View,Text,StyleSheet,TextInput,StatusBar,Image,ImageBackground} from 'react-native'
import Icon from "react-native-feather1s";

export default class Category extends Component {
    render(){
         return(
             <View style={styles.container}>
                 <View style={styles.firstView}>
                  <TextInput placeholder='Search Here...'
                style={styles.search}>
                     </TextInput>

                 </View>
       <View style={styles.secondView}>
       <Text style={styles.resourcesText}> Ready To Get Started?</Text>
       <View style={styles.newView}>
          <Text style={styles.jText}>Browse Your Category</Text>
          <Text style={styles.bText}>Check Now.</Text>

          <View style={styles.nView}> 
  <View style={{ flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'}}>
  <Text style={styles.VTest}>Videos</Text>
          
          <Text style={styles.multipleTest}>Chapter Test</Text>
          <Text style={styles.multipleTest}>Resources</Text>
          <Text style={styles.multipleTest}>QN Bank</Text>

  </View>
  <Icon   

name="minus"
size={23}
color='green'
thin={false}
style={{marginLeft:40}}

>


</Icon>

  </View>   
   </View>
     </View>
        <View style={styles.thirdView}>
        <ImageBackground source={require('../../assets/c4.jpg')}
    style={styles.profileImage}>

    </ImageBackground>
        </View>
        <View style={styles.fourthView}>

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
       backgroundColor:'#BEC3CE'
       
    
      },
      secondView:{
        height:'25%',
        width:'100%', 
      
       alignItems: 'center',
    //    justifyContent: 'center',
    //    flexDirection:'row',
       backgroundColor:'white'
    
      },
      thirdView:{
        height:'60%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
       backgroundColor:'orange'
    
      },
      fourthView:{
        height:'5%',
        width:'100%', 
      
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection:'row',
       backgroundColor:'white'
    
    
      },
       search:{
           width:'90%',
           height:'38%',
           paddingLeft:30,
           fontSize:16,
           paddingHorizontal:15,
           backgroundColor:'#f7f3f3',marginTop:StatusBar.currentHeight,
           borderRadius:8,
           marginBottom:40
           
       },
   resourcesText:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
        marginTop:10,
        marginRight:100
    },
    jText:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        marginRight:80,
        marginTop:15,
     

    },
    bText:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        
        marginTop:1

    },
    multipleTest:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        marginLeft:20,
        textAlign:'center',
        marginTop:1,
    },
   VTest:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        marginLeft:8,
        textAlign:'center',
        marginTop:1
    },
    nView:{
        height:"22%",
        width:'100%',
        backgroundColor:'#101f3d',
        marginTop:20,borderRadius:8
       
    },
    profileImage:{
        height:'100%',
        width:'100%'
    },
    
})