import React, {Component} from "react";
import {View,Text,StyleSheet,ImageBackground,Image} from 'react-native'
import Icon from "react-native-feather1s";
import Icons from 'react-native-vector-icons/MaterialIcons'
 

export default class Page extends Component {
    render(){
         return(
             <View style={styles.container}>
                 <View style={styles.first}>
                 <ImageBackground source={require('../assets/mi.jpg')}
      style={styles.Image}>
          <Icon   

name="play-circle"
size={50}
color='white'
thin={false}

style={{marginLeft:170,marginTop:55}}>
  


</Icon>
      </ImageBackground>
                 </View>
                 <View style={styles.second}>
                     <View>
                          <Text style={styles.long}>Long chapter name can be </Text>
                          <Text style={styles.long}>shown here</Text>
                     </View>
                     <View style={{flexDirection:'column'}}>
                     <Icon   

name="download"
size={30}
color='white'
thin={false}

style={{marginLeft:80,marginTop:8}}>
  


</Icon>
<Text style={styles.download}>Download</Text>
                     </View>

                 </View>
                 <View style={styles.third}>
                 <Icon   

name="chevron-left"
size={25}
color='white'
thin={false}

style={{marginLeft:10,marginTop:10}}>
  
<Text style={styles.previous}>Previous</Text>

</Icon>
<Icon   

name="disc"
size={15}
color='green'
thin={false}

style={{marginLeft:80,marginTop:20}}>
  
<Text>Part1</Text>

</Icon>
<Text style={styles.next}>Next</Text>
<Icon   

name="chevron-right"
size={25}
color='white'
thin={false}

style={{marginLeft:10,marginTop:15}}>
  


</Icon>
                     </View>
                     <View style={styles.four}>
                     <View style={styles.fifth}>
                     <View>
                         <Text style={styles.stext}>Your sample question can be shown here</Text>
                         <Text style={styles.stext}>here shown here</Text>


                     </View> 
                     <View>
                     <Image source={require('../assets/profile.png')}
      style={styles.firstImage}>
      </Image>
                     </View>
                     </View>
                     <View style={styles.five}>
                         <View>
                            <Text style={styles.ask}> Ask a question?</Text>
                         </View>
                         <View style={styles.white}>
                            <Text  style={styles.post}>Post</Text>
                         </View>

                       </View>
                       <View style={styles.six}>
                           <View>
                      
<Image source={require('../assets/jjj.jpg')}
style={styles.whatsapp}>

</Image>
</View>
<View>
    <Text style={styles.chat}> Chat with teacher</Text>
    </View>
                       </View>


                 </View>

             </View>
         )
    }
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        backgroundColor:'yellow'
    },
  download:{
        fontSize:13,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:70
    },
    first:{
        height:'25%',
        width:'100%',
        backgroundColor:'blue'
    },
    second:{
        height:'10%',
        width:'100%',
        backgroundColor:'#071D5C',
        flexDirection:'row'
        

    },
    long:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:18,
        marginTop:5
    },
   third:{
        height:'7%',
        width:'100%',
        backgroundColor:'#071D5C',
        flexDirection:'row'
    },
    previous:{
        fontSize:13,
        color:'white',
    fontWeight:'bold',
    
    },
    next:{
   fontSize:13,
   color:'white',
   fontWeight:'bold',
   marginLeft:90,
   marginTop:16
    },
    four:{
        height:'59%',
        width:'100%',
        backgroundColor:'#071D5C'
    },
    fifth:{
        height:'16%',
        width:'95%',
        backgroundColor:'black',
        borderRadius:8,
        marginLeft:10,
        marginTop:180,
        flexDirection:'row'
    },
    five:{
        height:'16%',
        width:'95%',
        backgroundColor:'#43778C',
        borderRadius:8,
        marginLeft:10,
        marginTop:10,
        flexDirection:'row'

    },
    
    six:{
        height:'16%',
        width:'96%',
        backgroundColor:'#071D5C',
        borderRadius:8,
        marginLeft:7,
        borderWidth:3,
        borderColor:'green',marginTop:10,
        flexDirection:'row'

    },
    stext:{
        fontSize:14,
        color:'white',
        fontWeight:'bold',
        marginLeft:10,
        marginTop:5
    },
    firstImage:{
        width:50,
        height:50,
        marginTop:8,
        marginLeft:30
    },
    ask:{
        color:'white',
        marginLeft:25,
        marginTop:18
    },
    white:{
        height:'50%',
        width:'20%',
        borderRadius:5,
        backgroundColor:'white',
        marginLeft:150,
        marginTop:14
    },
    post:{
        fontWeight:'bold',
        fontSize:15,
        color:'black',
        marginLeft:20,
        marginTop:5
    },
    chat:{
        fontSize:18,
        fontWeight:'bold',
        color:'green',
        marginTop:15,
        marginLeft:50
    },
    whatsapp:{
        height:'70%',
        width:'55%',
        marginLeft:80,
        marginTop:5,
        borderRadius:20
    },
    Image:{
        height:'100%',
        width:'100%'
    }
    
    
})