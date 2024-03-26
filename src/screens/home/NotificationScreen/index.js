import { View, Text, SafeAreaView, ScrollView, StyleSheet,Image, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../../constant/Colors'

const {width, height} = Dimensions.get("screen")


const NotificationScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
     <ScrollView>
     <Text style={styles.titleText}>Notification</Text>
     <View style = {styles.noNotificationContainer}>
      <Image resizeMode='contain' style = {styles.noNotificationImage} source={require("../../../../assets/images/Artwork.png")}/>
      <Text style = {styles.nonotificationText}>No Notifications!!</Text>
     </View>
     </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  titleText:{
    margin: 15,
    letterSpacing: 0.5,
    fontSize: 25,
    marginTop: 20,
    color: Colors.primaryColor,
  },
  noNotificationContainer:{
    flex:1,
    height:height*0.7,
    alignItems:"center",
    justifyContent:"center"
  },
  noNotificationImage:{
    height:width*0.8,
    width:height*0.3
  },
  nonotificationText:{
    color:Colors.primaryColor,
    fontSize:18,
    
  }
})

export default NotificationScreen