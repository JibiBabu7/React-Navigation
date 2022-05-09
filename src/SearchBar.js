import React from 'react'
import {
    View,Text,StyleSheet,TextInput,StatusBar,ImageBackground
}from 'react-native';

 
 const SearchBar = () => {
     return(
         <View style={styles.container}>
             <View style={styles.firstView}>
                
                 <TextInput placeholder='Search Here...'
                 style={styles.search}>

                 </TextInput>
                
             </View>
             <View style={styles.secondView}>
             <Text >Goodmornning</Text>
               <Text>Aaron Taylor</Text>
         
     
             </View>
             <View style={styles.thirdView}>

             </View>
             <View style={styles.fourthView}>

             </View>
           
            
         </View>

     )
 }

 const styles = StyleSheet.create({
   container:{
       width:'100%',
       height:'100%',
       backgroundColor:'#E2F2F3',
       
    //    justifyContent:'center',
       
     


   },
   firstView:{
    height:'15%',
    width:'100%', 
  
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection:'row',
   backgroundColor:'red'
   

  },
  secondView:{
    height:'25%',
    width:'100%', 
  
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection:'row',
   backgroundColor:'white'

  },
  thirdView:{
    height:'25%',
    width:'100%', 
  
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection:'row',
   backgroundColor:'orange'

  },
  fourthView:{
    height:'35%',
    width:'100%', 
  
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection:'row',
   backgroundColor:'pink'


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
       
   }
 })



 export default SearchBar;