import React, {Component, useState} from "react";

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
import Icon from "react-native-feather1s";
import Fether from 'react-native-vector-icons/Feather'


export default class course extends Component {
    render(){
         return(
             <View style={styles.container}>
                 <View style={styles.firstView}>
                 <View style={styles.leftBox}>
                    <TouchableHighlight underlayColor = 'transparent' onPress={()=> this.props.navigation.navigate('Work')}>
                <Icon   

name="chevron-left"
size={23}
color='#27AE60'
thin={false}

style={styles.state}>
</Icon>
</TouchableHighlight>

 </View>
 <View>
<Text style={styles.biologyText}> Biology</Text>
</View>
<View style={{flexDirection:'row'}}>
<View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='#27AE60'
thin={false}

style={styles.radio}>
</Icon>
<Text style={styles.subText}> 12 Chapters</Text>

</View>
<View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='#27AE60'
thin={false}

style={styles.radio}>
    


</Icon>  
<Text style={styles.subText}> 124 Hours</Text>

</View>


</View>
  </View>
    <View style={styles.secondView}>
                      <View style={styles.centerbox}>
                   <TouchableHighlight underlayColor = 'transparent' onPress={()=> this.props.navigation.navigate('Chapter')}>
                         <Text style={styles.middletext}>Long chapter name can be</Text></TouchableHighlight>
                         <Text  style={styles.scntext}>shown here</Text>
                         <View style={{flexDirection:'row'}}>
                         <View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
    


</Icon>
<Text style={styles.chapterText}> 12 Chapters</Text>

</View>
<View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
</Icon>  
<Text style={styles.chapterText}> 124 Hours</Text>

</View>
                             </View>
                     </View>
                     <View style={styles.centerbox}>
                     <TouchableHighlight  underlayColor = 'transparent'onPress={()=> this.props.navigation.navigate('Chapter')}>
                     <Text style={styles.middletext}>Long chapter name can be</Text></TouchableHighlight>
                         <Text  style={styles.scntext}>shown here</Text>
                         <View style={{flexDirection:'row'}}>
                         <View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
    


</Icon>
<Text style={styles.chapterText}> 12 Chapters</Text>

</View>
<View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
    


</Icon>  
<Text style={styles.chapterText}> 124 Hours</Text>

</View>
                             </View>
                     </View>
                     <View style={styles.centerbox}>
                     <TouchableHighlight onPress={()=> this.props.navigation.navigate('Chapter')}>
                     <Text style={styles.middletext}>Long chapter name can be</Text></TouchableHighlight>
                         <Text  style={styles.scntext}>shown here</Text>
                         <View style={{flexDirection:'row'}}>
                         <View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
    


</Icon>
<Text style={styles.chapterText}> 12 Chapters</Text>

</View>
<View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
    


</Icon>  
<Text style={styles.chapterText}> 124 Hours</Text>

</View>
                             </View>
                     </View>
                     <View style={styles.centerbox}>
                     <TouchableHighlight  underlayColor = 'transparent' onPress={()=> this.props.navigation.navigate('Chapter')}>
                     <Text style={styles.middletext}>Long chapter name can be</Text></TouchableHighlight>
                         <Text  style={styles.scntext}>shown here</Text>
                         <View style={{flexDirection:'row'}}>
                         <View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
    


</Icon>
<Text style={styles.chapterText}> 12 Chapters</Text>

</View>
<View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
    


</Icon>  
<Text style={styles.chapterText}> 124 Hours</Text>

</View>
                             </View>
                     </View>

                     <View style={styles.centerbox}>
                     <TouchableHighlight underlayColor = 'transparent' onPress={()=> this.props.navigation.navigate('Chapter')}>
                     <Text style={styles.middletext}>Long chapter name can be</Text></TouchableHighlight>
                         <Text  style={styles.scntext}>shown here</Text>
                         <View style={{flexDirection:'row'}}>
                         <View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
    


</Icon>
<Text style={styles.chapterText}> 12 Chapters</Text>

</View>
<View style={{flexDirection:'row'}}>
<Icon   

name="disc"
size={20}
color='gery'
thin={false}

style={styles.radio}>
    


</Icon>  
<Text style={styles.chapterText}> 124 Hours</Text>

</View>
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
      backgroundColor:'white'
    },
    firstView:{
    height:"28%",
    width:'100%',
    backgroundColor:'#101f3d',
},
secondView:{
    height:"70%",
    width:'100%',
    backgroundColor:'#EEEFF0',

},
leftBox:{
    width: '9%',
    height: '15%',

     backgroundColor:'#101f3d',
       
       borderRadius:6,
      borderWidth:1,
     borderColor: 'white',
     marginTop:15,
     marginLeft:20,
     alignItems:'center',
     marginTop:30,
     justifyContent:'center'
}, 
biologyText:{
    fontSize:24,
    fontWeight:'bold',
    color:'white',
    marginLeft:25,
    marginTop:30
},
radio:{
    marginLeft:30,
    marginTop:15
},
subText:{
    fontSize:10,
    color:'white',
     marginTop:17,
     marginLeft:10
},
centerbox:{
    width: '80%',
    height: '20%',

     backgroundColor:'white',
       
       borderRadius:6,
      borderWidth:1,
      borderColor:'white',
      marginLeft:40,
      marginBottom:12,
      
},
middletext:{
    fontSize:15,
    color:'#101f3d',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:10

},
scntext:{
    fontSize:15,
    color:'#101f3d',
    fontWeight:'bold',
    marginLeft:20,
    marginTop:2

},
chapterText:{
    fontSize:12,
    color:'gery',
    fontWeight:'bold',
    marginTop:16,
    marginLeft:5

}
})