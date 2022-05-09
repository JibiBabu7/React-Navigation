import React, {Component} from "react";
import {View,Text,StyleSheet,TouchableHighlight,Image} from 'react-native'
import Icon from "react-native-feather1s";
 

export default class Chapter extends Component {
    render(){
         return(
             <View style={styles.container}>
                 <View style={styles.firstView}>
                 <View style={styles.leftBox}>
                    <TouchableHighlight underlayColor = 'transparent' onPress={()=> this.props.navigation.navigate('Course')}>
                <Icon   

name="chevron-left"
size={23}
color='#27AE60'
thin={false}

>


</Icon>


</TouchableHighlight>

 </View>

 <Text style={styles.biologyText}>Biology</Text>
 
                 </View>
                 <View style={styles.newView}>
          <Text style={styles.jText}>Long chapter name can be</Text>
          <Text style={styles.bText}>be shown here.</Text>
   </View>
   <View style={styles.nwView}>
        
   <View style={{flexDirection:'row'}}>
                         <View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='green'
thin={false}

style={styles.rradio}>
    


</Icon>
<Text style={styles.ChapterText}> 12 Chapters</Text>

</View>
<View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='green'
thin={false}

style={styles.rradio}>
    


</Icon>  
<Text style={styles.ChapterText}> 124 Hours</Text>

</View>
 </View>
   </View>
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


  <View style={styles.firstBox}>
      <Image source={require('../assets/first.jpg')}
      style={styles.firstImage}>
      </Image>
      <Text style= {styles.longText}>Long chapter name can be shown </Text>
      <Text style= {styles.longText}>here.</Text>
     <View style={{flexDirection:'row'}}>
     <Icon   

name="disc"
size={20}
color='grey'
thin={false}

style={styles.greyradio}>
    


</Icon>
<Text style={styles.qText}> Chapter 1</Text>
<Icon   

name="disc"
size={20}
color='grey'
thin={false}

style={styles.greyradio}>
    


</Icon>
<Text style={styles.qText}> Part</Text>
  </View> 
      
  </View>    


  <View style={styles.firstBox}>
  <Image source={require('../assets/first.jpg')}
      style={styles.firstImage}>

      </Image>
      <Text style= {styles.longText}>Long chapter name can be shown </Text>
      <Text style= {styles.longText}>here.</Text>
     <View style={{flexDirection:'row'}}>
     <Icon   

name="disc"
size={20}
color='grey'
thin={false}

style={styles.greyradio}>
    


</Icon>
<Text style={styles.qText}> Chapter 1</Text>
<Icon   

name="disc"
size={20}
color='grey'
thin={false}

style={styles.greyradio}>
    


</Icon>
<Text style={styles.qText}> Part</Text>
  </View> 
      
  </View> 
             </View>
         )
    }
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    firstView:{
        height:"9%",
        width:'100%',
        backgroundColor:'#101f3d',
        flexDirection:'row'
    },
    leftBox:{
        width: '9%',
        height: '40%',
    
         backgroundColor:'#101f3d',
           
           borderRadius:6,
          borderWidth:1,
         borderColor: 'white',
         marginTop:15,
         marginLeft:20,
         alignItems:'center',
         marginTop:28,
         justifyContent:'center'
    }, 
    biologyText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginLeft:95,
        marginTop:23
    },
    newView:{
        height:"13%",
        width:'100%',
        backgroundColor:'#101f3d',
        flexDirection:'column'
    },
    nwView:{
        height:"5%",
        width:'100%',
        backgroundColor:'#101f3d',
        flexDirection:'row'
    },
    nView:{
        height:"8%",
        width:'100%',
        backgroundColor:'#101f3d',
       
    },
    
  jText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginLeft:35,
        marginTop:14

    },
    bText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginLeft:35,
        marginTop:1

    },
    rradio:{
        marginLeft:30,
        marginTop:1
    },
    ChapterText:{
        fontSize:12,
        color:'green',
        fontWeight:'bold',
        marginTop:3,
        marginLeft:5
    
    },
    multipleTest:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        marginLeft:20,
        textAlign:'center',
        marginTop:18
    },
   VTest:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        marginLeft:8,
        textAlign:'center',
        marginTop:18
    },
   firstBox:{
        width: '80%',
        height: '35%',
    
         backgroundColor:'white',
           
           borderRadius:6,
          borderWidth:1,
         borderColor: 'white',
         marginLeft:40,
         marginTop:10
    }, 
    firstImage:{
        width:311,
        height:160
    },
    longText:{
        fontSize:16,
        color:'#101f3d',
        fontWeight:'bold',
       marginTop:3,
       marginLeft:15
    },
    greyradio:{
        marginLeft:18,
        marginTop:1
    },
    qText:{
        fontSize:12,
        color:'grey',
        fontWeight:'bold',
        marginTop:3,
        marginLeft:5
    
    },
})