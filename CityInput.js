import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class CityInput extends Component {
   state = {
      city: '',
   }
   handleCity = (text) => {
      this.setState({ city: text })
      console.log(text)
   }

   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Stadi"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleCity}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.props.onCityEntry(this.state.city)
               }>
               <Text style = {styles.submitButtonText}> Enter </Text>
              
            </TouchableOpacity>
         </View>
      )
   }
}
export default CityInput

const styles = StyleSheet.create({
   container: {
      paddingTop: 100,
       
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 2
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})