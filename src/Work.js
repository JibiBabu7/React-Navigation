import React, {Component, useState} from "react";
import Icon from "react-native-feather1s";
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
export default class Work extends  Component {
  render(){
    
    return (
      
 <View style= {styles.container}>
     <View style={styles.firstView}> 
          <TouchableHighlight style={styles.Button}
             underlayColor = 'transparent'
             onPress={()=> this.props.navigation.navigate('Drawer')}>
     
         <ImageBackground source={require('../assets/b.png')}
              style={styles.firstImage}> 

           </ImageBackground>
         </TouchableHighlight>
            <ImageBackground source={require('../assets/s.jpg')}
                style={styles.secondImage}> 

             </ImageBackground>
                 <Text style={styles.state}>   Classes</Text>
          
     </View>
          <View style={styles.secondView}>
               <Text style={styles.goodmornningText}>Goodmornning</Text>
               <Text style={styles.aaronText}>Aaron Taylor</Text>
         
          </View> 

            <View style={styles.middleView}>
              <Text style={styles.classText}>Classes</Text>
               <Text style={styles.plustwoText}>Plus Two Science</Text>
         
            </View>
            <View style= {styles.subView}>
      <View style={styles.course}>
           <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                
             
                  <Image source={require('../assets/g.png')}
                       style={{height:25,
                       width:25,
                       borderRadius:100,
                       borderWidth:0.5,marginLeft:2,
                       marginTop:2}}></Image>
            </TouchableHighlight>
                    <Text style={{fontSize:13,
                                  fontWeight:'bold',
                                       color:'black',marginTop:5,marginLeft:5}}>Biology</Text>
           
           </View>
    <View style={styles.course}>
        <TouchableHighlight underlayColor = 'transparent'
               onPress={()=> this.props.navigation.navigate('Course')}>
               <Image source={require('../assets/g.png')}
                   style={{height:25,
                   width:25,
                   borderRadius:100,
                   borderWidth:0.5,marginLeft:2,
                    marginTop:2}}></Image>
      </TouchableHighlight>
                  <Text style={{fontSize:13,
                        fontWeight:'bold',
                        color:'black',marginTop:5,marginLeft:5}}>Physics</Text>
            
              </View>
     <View style={styles.course}>
             <TouchableHighlight underlayColor = 'transparent'
                  onPress={()=> this.props.navigation.navigate('Course')}>
                      <Image source={require('../assets/g.png')}
                             style={{height:25,
                               width:25,
                               borderRadius:100,
                               borderWidth:0.5,marginLeft:2,
                               marginTop:2}}></Image> 
              </TouchableHighlight>
                      <Text style={{fontSize:13,
                            fontWeight:'bold',
                            color:'black',marginTop:5,marginLeft:5}}>Chemistry</Text>
           
           </View>
    <View style={styles.course}>
            <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Course')}>
                      <Image source={require('../assets/g.png')}
                          style={{height:25,
                            width:25,
                            borderRadius:100,
                            borderWidth:0.5,marginLeft:2,
                             marginTop:2}}>

                             </Image>
              </TouchableHighlight>
                        <Text style={{fontSize:13,
                                  fontWeight:'bold',
                           color:'black',marginTop:5,marginLeft:5}}>Maths</Text>
           
           </View>
           </View>

          <View style={styles.thirdView}>
            <Text style={styles.recentText}> Recent courses</Text>
           
            <Image source={require('../assets/pic.png')} style={styles.pic}></Image>

          </View>
        
        <View style={{flexDirection:'column'}}>
          <View style={styles.fourthView}>
            <View style={styles.logo}>
            <Image source={require('../assets/j.jpg')}
              style={styles.jImage}></Image>
              <Text style={styles.newText}>Target Live classe</Text>
              <Text style={styles.liveText}>Live classes by best teachers from Learnng HUB to clear your doubts </Text>
              <TouchableHighlight style={styles.greenButton}>
                <Text style={styles.bookText}>Book a free class</Text>
              </TouchableHighlight>

            </View>
            
            
            
            <View style={styles.Llogo}>
            <Image source={require('../assets/j.jpg')}
              style={styles.jImage}></Image>
               <Text style={styles.newText}>Avail free  online class</Text>
               <Text style={styles.newText}>counselling session</Text>
               <Text style={styles.liveText}>By learning HUB experts </Text>
               <TouchableHighlight style={styles.greenButton}>
                <Text style={styles.bookText}>Schedule a call</Text>
              </TouchableHighlight>
            </View>
             
          </View>
        
         <View style={{height:'7%',width:'95%',backgroundColor:'#c7c3bb', borderRadius:6,marginLeft:8,marginTop:1,flexDirection:'row'}}>
         <View>
            <Icon   

name="home"
size={22}
color='green'
thin={false}
style={{marginLeft:15,marginTop:5}}

>
   

</Icon>

            </View>
            <View>
            <Icon   

name="play"
size={15}
color='grey'
thin={false}
style={{marginLeft:15,marginTop:5}}

>
    <Text>Recent</Text>


</Icon>

            </View>
            <View>
            <Icon   

name="clipboard"
size={18}
color='grey'
thin={false}
style={{marginLeft:15,marginTop:5}}

>
    <Text>Exams</Text>


</Icon>

            </View>
            <View>
              <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Formal')}> 
            <Icon   

name="user"
size={15}
color='grey'
thin={false}
style={{marginLeft:15,marginTop:5}}

>
<Text>Profile</Text>


</Icon>
</TouchableHighlight>

            </View>
            <View>
            <Icon   

name="mail"
size={15}
color='grey'
thin={false}
style={{marginLeft:20,marginTop:5}}

>
    <Text>Contact</Text>


</Icon>

            </View> 

            
         </View>
        </View>
      </View>
      
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height:'100%',
     width:'100%', 
    backgroundColor:'white',
   

  },
  firstView:{
    height:'15%',
    width:'100%', 
   backgroundColor:'white',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection:'row'
   

  },
  secondView:
  {
      height:'10%',
  width:'100%', 
 backgroundColor:'white',
 flexDirection:'column',


 alignItems: 'center',
 justifyContent: 'center',
 

  },
  thirdView:{
    height:'18%',
  width:'100%', 
 backgroundColor:'white',
 marginBottom:20

  },
  fourthView:{
    height:'43%',
    width:'100%', 
   backgroundColor:'white',
   flexDirection:'row',
  //  alignItems:'center',
  //  justifyContent:'center',
   marginTop:10
  
    
  },
  firstImage:{
    height:'220%',
    width:'100%',
    marginRight:13,
    marginBottom:39
    
  
},
middleView:{
  height:'12%',
  width:'100%', 
 backgroundColor:'blue',
 width: '90%',
 
    backgroundColor:'#101f3d',
    
    borderRadius:8,
   borderWidth:0.5,
  borderColor: 'grey',
  marginLeft:18

},
subView:{
  height:'12%',
  width:'100%', 
 backgroundColor:'white',
 flexDirection:'row'
 

},
  secondImage:{
    height:'58%',
    width:'60%',
    marginTop:15,
    marginRight:22
  },
  state:{
    width: '15%',
height: '40%',
   backgroundColor:'white',
   color:'green',
   textAlign:'center',
   
   
   borderRadius:4,
  borderWidth:1,
 borderColor: 'green',
marginBottom:15,
 marginRight:240

},
 goodmornningText:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#101f3d',
    marginRight:240,
    
 
    
  },
  classState:{
    width: '85%',
height: '40%',
   backgroundColor:'#101f3d',
   color:'green',
   textAlign:'center',
   
   
   borderRadius:4,
  borderWidth:1,
 borderColor: 'green',
marginBottom:15,
 marginRight:6,
 

},
  aaronText:{
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginRight:210,
    marginBottom:10

    
  },
  
 classText:{
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    marginLeft:40,
    marginTop:14
},
plustwoText:{
  fontSize: 15,
  fontWeight: 'bold',
  color: 'grey',
  marginLeft:40,
  marginTop:4
},
course:{

  width: '25%',
  height: '40%',
     backgroundColor:'white',
     color:'black',
     textAlign:'center',
     
     
     borderRadius:4,
    borderWidth:2,
   borderColor: 'black',
   marginTop:18,
   marginLeft:15,
   flexDirection:'row'

},
roundImage:{

},
recentText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:10,
    marginLeft:2
},
pic:{
  height:'100%',
  width:'100%',
  marginBottom:20

},
squre:{
    width: '45%',
height: '80%',
   backgroundColor:'#101f3d',
   color:'grey',
   
   borderRadius:8,
  borderWidth:0.5,
 borderColor: 'grey',
 marginLeft:13,
 marginBottom:32
},
logo:{
  height:'99%',
  width:'48%', 


 
    backgroundColor:'#101f3d',
    
    borderRadius:8,
   borderWidth:0.5,
  borderColor: 'grey',
  marginLeft:5,
  marginTop:3
  // marginBottom:190,

},
Llogo:{
  height:'99%',
  width:'48%', 


 
    backgroundColor:'#101f3d',
    
    borderRadius:8,
   borderWidth:0.5,
  borderColor: 'grey',
  marginLeft:5,
  marginTop:3
 

},
jImage:{
  height:'35%',
  width:'35%',
  borderRadius:100,
  borderWidth:0.5,
  marginLeft:45,
  marginTop:10
},
newText:{
  fontSize:14,
  fontWeight:'bold',
  color:'white',
 textAlign:'center',
 marginBottom:6
},
liveText:{
  fontSize:12,
  fontWeight:'bold',
  color:'white',
 textAlign:'center',
 marginTop:20
},
greenButton:{
  height:'15%',
  width:'70%',
  backgroundColor:'green',
  borderRadius:2,
  marginTop:28,
  marginLeft:30,
  alignItems:'center',
  justifyContent:'center'

},
bookText:{
  fontSize:12,
  fontWeight:'bold',
  textAlign:'center',
  color:'white'
},
Button:{
    width: '15%',
    height: '10%',
    // backgroundColor: 'green',
marginLeft:250,

    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
 
},
registerText:{
 
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
},
text:{
  marginVertical:20,
  fontSize:25
},
touchableOpacity:{
  backgroundColor:'orange',
  alignSelf:'stretch',
  paddingHorizontal:20
},
buttonText:{
   
  fontSize:18,
  color:'black',
  fontWeight:'bold'

,

courseText:{
  fontSize:12,
  fontWeight:'bold',
  color:'black',
 textAlign:'center',

},
}
})