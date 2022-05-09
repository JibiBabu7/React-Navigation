import React,{Component} from "react";
import {View,Text,StyleSheet,Image} from 'react-native'
import Icon from "react-native-feather1s";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class DrawerContent extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.sideBox}>
                    <TouchableHighlight onPress={()=> this.props.navigation.navigate('Home')}
                    underlayColor = 'transparent'>
                <Icon   

name="x"
size={23}
color=''
thin={false}
>
</Icon>
</TouchableHighlight>
 </View> 
    <View style={styles.profileContainer}>
    <View style={styles.profileIcon}> 
    <Image source={require('../../assets/profile.png')}
    style={styles.profileImage}>

    </Image>
 </View>
     <View style={styles.infoView}>
         <Text style={styles.nameText}> Dev Devadas</Text>
         <Text style={styles.idText}> ID:1234</Text>
     </View>
     <View>
     <TouchableHighlight onPress={()=> this.props.navigation.navigate('Home')}
 underlayColor = 'transparent'>
     <Icon   

name="chevron-right"
size={23}
color=''
thin={false}

style={styles.arrowState}>
</Icon>
</TouchableHighlight>
  </View>
    
    
 </View>
 <View style={{flexDirection:'row'}}>
    <View style={styles.squreIcon}>
    <Icon   

 name="award"
size={29}
color=''
thin={false}

>
</Icon>
        </View> 
        <Text style={styles.textts}> Ability Test</Text>
        
 </View>
 <View style={{flexDirection:'row'}}>
    <View style={styles.squreIcon}>
    <Icon   

name="arrow-down"
size={29}
color=''
thin={false}
>
</Icon>
        </View> 
        <Text style={styles.textts}>Offline Downloads</Text>
 </View>
 <View style={{flexDirection:'row'}}>
    <View style={styles.squreIcon}>
    <Icon   

name="archive"
size={29}
color=''
thin={false}
>
</Icon>
        </View> 
        <Text style={styles.textts}> Practicals</Text>
 </View>

 <View style={{flexDirection:'row'}}>
    <View style={styles.squreIcon}>
    <Icon   

name="book-open"
size={29}
color=''
thin={false}
>
</Icon>
        </View> 
        <Text style={styles.textts}> Exam</Text>
 </View>
 <View style={{flexDirection:'row'}}>
    <View style={styles.squreIcon}>
    <Icon   

name="file"
size={29}
color=''
thin={false}
>
</Icon>
        </View> 
        <Text style={styles.textts}> Refferals</Text>
 </View>
 <View style={{flexDirection:'row'}}>
    <View style={styles.squreIcon}>
    <Icon   

name="bell"
size={29}
color=''
thin={false}
>
</Icon>
        </View> 
        <Text style={styles.textts}> Notification</Text>
 </View>
 <View style={{flexDirection:'row'}}>
    <View style={styles.squreIcon}>
    <Icon   

name="send"
size={29}
color=''
thin={false}
>
</Icon>
        </View> 
        <Text style={styles.textts}> ShareApp</Text>
 </View>
 {/* <View style={styles.bigIcon}>
 <TouchableHighlight onPress={()=> this.props.navigation.navigate('Login')}
 underlayColor = 'transparent'>
 <Text style={styles.enqText}> Logout</Text>
 </TouchableHighlight>
       
       </View>  */}
       <View style={{marginBottom:10}}>
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
                 onPress={()=> this.props.navigation.navigate('Top')}>LEARN  MORE</Text>
</TouchableHighlight>
</View>
</View>
</View>
<View style={styles.bigIcon}>
 <TouchableHighlight onPress={()=> this.props.navigation.navigate('Login')}
 underlayColor = 'transparent'>
 <Text style={styles.enqText}> Logout</Text>
 </TouchableHighlight>
       
       </View> 
             </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#D5D8DC'
    },
    sideBox:{
        width: '10%',
        height: '5%',
    
         backgroundColor:'#A366A5',
           
           borderRadius:6,
          borderWidth:1.5,
         borderColor: 'pink',
         marginTop:10,
         marginLeft:10,
         alignItems:'center',
         justifyContent:'center'
    },
    menu:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    profileContainer:{
        height:'20%',
        width:'100%',
        backgroundColor:'',
    flexDirection:'row',
    alignItems:'center',
  
},
profileIcon:{

    height:90,
    width:90,
    backgroundColor:'#bbbbbb',
    borderRadius:50,
    borderColor:'green',
    
    marginLeft:10
},
infoView:{
    marginLeft:10,
  


},
profileImage:{
    height:'100%',
    width:'100%'
},
nameText:{
    color:'#89B0AF ',
    fontSize:17,
    fontWeight:'bold'
},
idText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#89B0AF '
},
arrowState:{
    marginLeft:15
},
squreIcon:{

    height:40,
    width:40,
    backgroundColor:'#834C85',
    borderRadius:10,
    borderColor:'pink',
    borderWidth:2,
    
    marginLeft:30,
    marginBottom:20
},
textts:{
    fontSize:15,
    fontWeight:'bold',
    color:'b;ack',
    marginLeft:20,
    marginTop:5

},
redIcon:{

    height:40,
    width:40,
    backgroundColor:'#101f3d',
    borderRadius:10,
    borderColor:'red',
    borderWidth:2,
    
    marginLeft:30,
    marginBottom:20
},
bigIcon:{

    height:40,
    width:230,
    backgroundColor:'#834C85',
    borderRadius:8,
    borderColor:'green',
    borderWidth:2,
    
    marginLeft:30,
    marginBottom:20
},
enqText:{
    fontSize:15,
    fontWeight:'bold',
    color:'white',
    marginLeft:20,
    marginTop:5,
    textAlign:'center'

},
fIFTHView:{
    height:'30%',
    width:'100%', 
  
   alignItems: 'center',
   justifyContent: 'center',

   backgroundColor:'white',marginBottom:1




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