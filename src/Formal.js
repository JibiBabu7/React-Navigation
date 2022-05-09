import React, {Component} from "react";
import {View,Text,StyleSheet,Image, ImageBackground, } from 'react-native'
import Icon from "react-native-feather1s";
import { TouchableHighlight } from "react-native-gesture-handler";
 

export default class Formal extends Component {
    render(){
         return(
            <View style={styles.container}>
                 <View style={styles.firstView}>
                 <Text style={styles.pageText}>Profile</Text>
                <Icon   

name="bell"
size={20}
color='#27AE60'
thin={false}

style={styles.bell}>
  


</Icon>
<Image source={require('../assets/crop.png')}
style={styles.crop}>

</Image>

                 </View>
          
                 <View style={styles.frstView}>
                 <ImageBackground source={require('../assets/white.jpg')}
    style={styles.whiteImage}>
         <View style={{flexDirection:'row'}}>
         <View style={styles.profileContainer}>
          <Image source={require('../assets/profile.png')}
          style={styles.pro}>

          </Image>
      
        
      </View>
      <View style={{flexDirection:'column'}}>
      <Text style={styles.janeText}>Jane Doe</Text>
              <Text style={styles.idText}>ID: 12345678</Text>
              <Text style={styles.personalinfo}>Personal Info</Text>
              <View style={{flexDirection:'row'}}>
              <Text style={styles.acc}>Account Settings</Text>
              <Text style={styles.aaroninfo}> Aaron Taylor</Text>
          </View><View style={{flexDirection:'row'}}>
              <Text style={styles.acc}>Email</Text>
              <Text style={styles.aaroninfo}>       emailid123@server.com</Text>
          </View>
          <View style={{flexDirection:'row'}}>
              <Text style={styles.acc}>Number</Text>
              <Text style={styles.aaroninfo}>            +9876543210</Text>
          </View>
          <View >
              <Text style={styles.courseinfo}>Course Info</Text>
            
          </View>
          <View style={{flexDirection:'row'}}>
              <Text style={styles.center}>Center</Text>
              <Text style={styles.ininfo}>       Inmakes edu</Text>
          </View>
          <View style={{flexDirection:'row'}}>
              <Text style={styles.center}>Course</Text>
              <Text style={styles.ininfo}>      Plus Two Science</Text>
          </View>
          <View style={{flexDirection:'row'}}>
              <Text style={styles.center}>Payment</Text>
              <Text style={styles.ininfo}>   Free</Text>
          </View>
          <View style={{flexDirection:'row'}}>
              <Text style={styles.center}>Expiry date</Text>
              <Text style={styles.ininfo}>Not Applicable</Text>
          </View>
      </View>

         </View>
        </ImageBackground>
                 </View>
                 <View style={{ height:"7%",
        width:'93%',
        backgroundColor:'#49be25',borderRadius:2,flexDirection:'row',marginTop:320,
        borderRadius:10,marginLeft:9}}>
            <View style={{ height:"80%",
        width:'15%', marginTop:5,marginLeft:15,
        backgroundColor:'#25BE7F',borderRadius:2}}>
            <Icon   

name="credit-card"
size={23}
color='white'
thin={false}
style={{marginLeft:15,marginTop:5}}

>


</Icon>

        </View>
        <Text style={{marginLeft:20,marginTop:10,color:'white'}}>Custom Payment</Text>
        <Icon   

name="chevron-right"
size={23}
color='white'
thin={false}
style={{marginLeft:120,marginTop:8}}

>


</Icon>



          </View>
          <View style={{ height:"7%",
        width:'93%',
        backgroundColor:'#49be25',borderRadius:2,flexDirection:'row',marginTop:10,marginLeft:8,borderRadius:8}}>
            <View style={{ height:"80%",
        width:'15%', marginTop:5,marginLeft:15,
        backgroundColor:'#25BE7F',borderRadius:2}}>
            <Icon   

name="corner-down-right"
size={23}
color='white'
thin={false}
style={{marginLeft:15,marginTop:5}}

>


</Icon>

        </View>
        <Text style={{marginLeft:20,marginTop:10,color:'white'}}>Refferals</Text>
        <Icon   

name="chevron-right"
size={23}
color='white'
thin={false}
style={{marginLeft:170,marginTop:10}}

>


</Icon>



          </View>
          
          <View style={{ height:"7%",
        width:'93%',
        backgroundColor:'white',borderRadius:2,flexDirection:'row',flexDirection:'row',borderRadius:5.5,marginTop:10,marginLeft:10}}>
            <View>
                <TouchableHighlight underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Work')}>
            <Icon   

name="home"
size={18}
color='grey'
thin={false}
style={{marginLeft:5,marginTop:5}}

>
    <Text>Home</Text>


</Icon>
</TouchableHighlight>

            </View>
            <View>
            <Icon   

name="play"
size={18}
color='grey'
thin={false}
style={{marginLeft:5,marginTop:5}}

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
                <TouchableHighlight  underlayColor = 'transparent'
                 onPress={()=> this.props.navigation.navigate('Personal')}>
            <Icon   

name="user"
size={20}
color='green'
thin={false}
style={{marginLeft:5,marginTop:5}}

>
   


</Icon>
</TouchableHighlight>

            </View>
            <View>
            <Icon   

name="mail"
size={18}
color='grey'
thin={false}
style={{marginLeft:5,marginTop:5}}

>
    <Text>Contact</Text>


</Icon>

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
              backgroundColor:'#CCCCCC'
           
            
          },
          pageText:{
            fontSize:22,
            fontWeight:'bold',
            color:'#fff',
           textAlign:'center',
           marginLeft:150,
           marginTop:10
        },
        firstView:{
            height:"5%",
            width:'100%',
            backgroundColor:'#101f3d',
            flexDirection:'row'
        },
        frstView:{
            height:"25%",
            width:'100%',
            backgroundColor:'#101f3d',
            flexDirection:'row'
        },
        secondView:{
            height:"70%",
            width:'100%',
            backgroundColor:'#EEEFF0',
        
        },
        whiteImage:{
            height:450,
            width:360,
            marginTop:40,
            marginLeft:14,
            borderRadius:8
        },
        bell:{
            marginLeft:100,
            marginTop:13
    
        },
        crop:{
            height:'100%',
            width:'10%',
            marginTop:6,
            marginLeft:10
        },
        profileContainer:{
            height:'19%',
            width:'23%',
            borderColor:'green',
            backgroundColor:'grey',
            borderRadius:60,
            marginTop:10,
            marginLeft:5,
            
        
        },
        pro:{
            height:85,
            width:'100%'
        },
        janeText:{
            fontSize:18,
            fontWeight:'bold',
            marginTop:25,
            marginLeft:15
        },
        idText:{
            fontSize:10,
            fontWeight:'bold',
            marginLeft:15
        },
        personalinfo:{
            fontSize:20,
            fontWeight:'bold',
            color:'black',
            marginTop:40,
            textAlign:'left',
            marginRight:200
        
        },
        acc:{
            fontSize:16,
            
            color:'black',
            marginTop:20
        },
        aaroninfo:{
            fontSize:16,
            fontWeight:'bold',
            color:'black',
            marginTop:20,
            marginLeft:25
        },
       courseinfo:{
            fontSize:20,
            fontWeight:'bold',
            color:'black',
            marginBottom:1,
            marginTop:15
        },
        center:{
            fontSize:16,
            
            color:'black',
            marginTop:10
        },
        ininfo:{
            fontSize:16,
            fontWeight:'bold',
            color:'black',
             marginTop:15,
             marginLeft:55
        },
       
        
              
})
