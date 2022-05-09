import React from 'react'
import {
    View,Text,StyleSheet,TextInput,StatusBar,ImageBackground,TouchableHighlight
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
             <Text style={styles.goodmornningText}>Online Learning</Text>
               <Text style={styles.aaronText}>Set up Your Own Learning Space</Text>
         
             </View>
             <View style={styles.thirdView}>
               <View>
               <Text style={styles.Text}>1K+</Text>
               <Text style={styles.smallText}>Tutors </Text>
              
               </View>
               <View>
                  <Text style={styles.Text}>5K+</Text>
                  <Text style={styles.smallText}>Students</Text>
               </View>
          <View>
          <Text style={styles.Text}>100+</Text>
                  <Text style={styles.smallText}>Courses</Text>
          </View>
             </View>
             <View style={styles.fourthView}>
             <ImageBackground source={require('../../assets/e7.jpg')}
    style={styles.profileImage}>

    </ImageBackground>
             </View>
             <View style={styles.fIFTHView}>
               <View style={{flexDirection:'row'}}>
             <View style={styles.course}>
              <TouchableHighlight>
               <Text style={styles.getText}
                 onPress={()=> this.props.navigation.navigate('Tab')}>GET STARTED</Text>
</TouchableHighlight>
</View>
<View style={styles.course}>
              <TouchableHighlight>
               <Text style={styles.getText}
                 onPress={()=> this.props.navigation.navigate('Tab')}>LEARN  MORE</Text>
</TouchableHighlight>
</View>
</View>

      <Text style={styles.lastText}>
        Need a Wenbsitle? Try our interactive web wizard and get a tailored solution to your web needs in just a few minutes
      </Text>
    
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
   backgroundColor:'#CBD3D0',
   
   

  },
  secondView:{
    height:'15%',
    width:'100%', 
   backgroundColor:'white'

  },
  thirdView:{

   height:'15%',
  width:'100%', 
backgroundColor:'white',
    
  //   borderRadius:8,
  //  borderWidth:0.5,
  borderColor: 'grey',
 flexDirection:'row'
  },
  fourthView:{
    height:'30%',
    width:'100%', 
  
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection:'row',

  },
  fIFTHView:{
    height:'40%',
    width:'100%', 
  
   alignItems: 'center',
   justifyContent: 'center',

   backgroundColor:'white',




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
   goodmornningText:{
    fontSize: 26,
    fontWeight: 'bold',
    color: '#502173',
    marginTop:13,
    marginLeft:25
    
     
  },
  aaronText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop:6,
    marginLeft:25
   
    
  },
  profileImage:{
    height:'100%',
    width:'100%',
  
},
Text:{
  fontSize: 22,
  fontWeight: 'bold',
  color: 'black',
  marginLeft:55,
  marginTop:1

  
},
smallText:{
  fontSize: 15,
  fontWeight: 'bold',
  color: '#778391',
  marginLeft:55
  
},
lastText:{
  fontSize: 15,
 
  color: '#2B343E',
  marginLeft:5,
  marginBottom:125
},
getText:{
  fontSize: 15,
 
  color: 'white',
  marginLeft:28,
  marginTop:10

},
   
course:{

  width: '40%',
  height: '100%',
     backgroundColor:'#73A5DA',
     
     textAlign:'center',
    marginBottom:10,
     borderRadius:8,
    
   

   marginLeft:10,
  //  flexDirection:'row'
}  
 })



 export default SearchBar;