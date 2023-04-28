import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from 'react-native-elements'

const CustomListItem = () => {
  return (
    <ListItem>
        <Avatar
        rounded
        source={{
            uri: 'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'
        }}
        
        />
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight:"800"}}>
                Youtube Chat
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
              This is a test subtitle
            </ListItem.Subtitle>
        </ListItem.Content>    
    </ListItem>
    
  ) 
}

export default CustomListItem

const styles = StyleSheet.create({})