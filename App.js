import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 import { createDrawerNavigator } from "@react-navigation/drawer";
 import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
 import Icon from 'react-native-vector-icons/MaterialIcons'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


 import First from "./src/First";
  import Login from "./src/Login";
  import Flexbox from "./src/Flexbox";
  import Student from "./src/Student";
import School from "./src/School";
import Profile from "./src/Profile";
import Wallpaper from "./src/Wallpaper";
import Screen from "./src/Screen";
import Frame from "./src/Frame";
import Title from "./src/Title";
import Work from "./src/Work";
import course from "./src/Course";
import Chapter from "./src/Chapter";
import Personal from "./src/Personal";
import Formal from "./src/Formal";

import Home from './src/Drawer/Home';
import Page from './src/Drawer/Page'; 
import DrawerContent from "./src/Drawer/DrawerContent";

import Category from "./src/Tab/Category";
import Search from "./src/Tab/Search";
import Store from "./src/Tab/Store";
import Order from "./src/Tab/Order";

import Message from "./src/Top/Message";
import More from "./src/Top/More";
import Notification from "./src/Top/Notification";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()
const Top = createMaterialBottomTabNavigator()

function MyStack(){
   return(
     <Stack.Navigator>
       <Stack.Screen
        name = 'First'
        component ={First}
        options={{headerShown:false}}/>

       <Stack.Screen
        name = 'Login'
        component ={Login}
        options={{headerShown:false}}/>

    <Stack.Screen
        name = 'Flexbox'
        component ={Flexbox}
        options={{headerShown:false}}/>
  <Stack.Screen
        name = 'Student'
        component ={Student}
        options={{headerShown:false}}/>
   <Stack.Screen
        name = 'School'
        component ={School}
        options={{headerShown:false}}/>
   <Stack.Screen
        name = 'Profile'
        component ={Profile}
        options={{headerShown:false}}/>
  <Stack.Screen
        name = 'Wallpaper'
        component ={Wallpaper}
        options={{headerShown:false}}/>
 <Stack.Screen
        name = 'Frame'
        component ={Frame}
        options={{headerShown:false}}/>
         <Stack.Screen
        name = 'Screen'
        component ={Screen}
        options={{headerShown:false}}/>
 <Stack.Screen
        name = 'Title'
        component ={Title}
        options={{headerShown:false}}/>   
   <Stack.Screen
        name = 'Work'
        component ={Work}
        options={{headerShown:false}}/>   
  <Stack.Screen
        name = 'Course'
        component ={course}
        options={{headerShown:false}}/>
  <Stack.Screen
        name = 'Chapter'
        component ={Chapter}
        options={{headerShown:false}}/>
  <Stack.Screen
        name = 'Personal'
        component ={Personal}
        options={{headerShown:false}}/>
<Stack.Screen
        name = 'Formal'
        component ={Formal}
        options={{headerShown:false}}/>


<Stack.Screen
        name= 'Drawer'
        component= {MyDrawer}
        options={{headerShown:false}}/>

<Stack.Screen
        name= 'Tab'
        component= {MyTab}
        options={{headerShown:false}}/>

<Stack.Screen
        name= 'Top'
        component= {MyTop}
        options={{headerShown:false}}/>      
     </Stack.Navigator>

     
   )
}

function MyDrawer(){
  return(
    <Drawer.Navigator
      drawerContent= {(props)=> <DrawerContent {...props}
       /> }>
      <Drawer.Screen
         name='Home'
         component={Home}
         options={{headerShown:false}}
      />
   <Drawer.Screen
         name='Page'
         component={Page}
        />
        
<Drawer.Screen
        name= 'Tab'
        component= {MyTab}
        options={{headerShown:false}}/>

<Drawer.Screen
        name= 'Top'
        component= {MyTop}
        options={{headerShown:false}}/>      
    

    </Drawer.Navigator>
  )
}

function MyTab(){
  return(
    
    <Tab.Navigator
    drawerContent= {(props)=> <TabContent {...props}
    /> }
      screenOptions={{
        tabBarLabelStyle: { fontSize:14 },
        tabBarItemStyle: {width: 100},
        tabBarStyle: {backgroundColor: '#E8E5E8'}
      }}>
    
         <Tab.Screen
       name="Category"
       component={Category}
       options= {{
         tabBarActiveTintColor:'#02376D',
         tabBarInactiveTintColor:'grey',
         tabBarIcon: ({focused})=>
        focused ?  <Icon name="category" size={24} color= '#AFC6DE' /> :  <Icon name="category" size={24} color= 'grey' />
       }}
       />
        <Tab.Screen
       name="Search"
       component={Search}
       options= {{
        tabBarActiveTintColor:'#02376D',
        tabBarInactiveTintColor:'grey',
        tabBarIcon: ({focused})=> 
        focused ? <Icon name="search" size={30} color= '#AFC6DE'/> :  <Icon name="search" size={30} color= 'grey'/>
      }}/>
        <Tab.Screen
       name="Store"
       component={Store}
       options= {{
        tabBarActiveTintColor:'#02376D',
        tabBarInactiveTintColor:'grey',
        tabBarIcon: ({focused})=>
        focused ? <Icon name="storefront" size={26} color= '#AFC6DE'/> : <Icon name="storefront" size={26} color= 'grey'/>
      }}/>
        <Tab.Screen
     name="Order"
       component={Order}
       options= {{
        tabBarActiveTintColor:'#02376D',
        tabBarInactiveTintColor:'grey',
        tabBarIcon: ({focused})=>
        focused ? <Icon name="favorite" size={24}  color= '#AFC6DE' /> :<Icon name="favorite" size={24}  color= 'grey' />
      }}/>
    </Tab.Navigator>
  )
}

function MyTop(){
  return(

    <Top.Navigator
    drawerContent= {(props)=> <TopContent {...props}
    /> }
    screenOptions={{
      tbBarLabelStyle: { fontSize:16 },
      tabBarItemStyle: {width: 100},
      tabBarStyle: {backgroundColor: 'black'}
    }}>
      <Top.Screen
      name="Message"
      component={Message}
      options= {{
        // tabBarActiveTintColor:'#02376D',
        tabBarActiveTintColor:'#02376D',
        tabBarInactiveTintColor:'grey',
        tabBarIcon: ({focused})=>
       focused ?  <Icon name="email" size={24} color= '#AFC6DE' /> :  <Icon name="email" size={24} color= 'grey' />
      }}/>
        <Top.Screen
      name="More"
      component={More}
      options= {{
        tabBarActiveTintColor:'#02376D',
        tabBarInactiveTintColor:'grey',
        tabBarIcon: ({focused})=>
       focused ?  <Icon name="menu" size={24} color= '#AFC6DE' /> :  <Icon name="menu" size={24} color= 'grey' />
      }}/>
        <Top.Screen
      name="Notification"
      component={Notification}
        options= {{
         tabBarActiveTintColor:'#02376D',
         tabBarInactiveTintColor:'grey',
         tabBarIcon: ({focused})=>
        focused ?  <Icon name="notifications" size={24} color= '#AFC6DE' /> :  <Icon name="notifications" size={24} color= 'grey' />
       }}/>
    </Top.Navigator>
  )
}

export default function App(){
   return(
     <NavigationContainer>
       <MyStack/>
     </NavigationContainer>
   )
}