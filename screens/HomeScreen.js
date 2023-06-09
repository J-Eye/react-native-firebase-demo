import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})