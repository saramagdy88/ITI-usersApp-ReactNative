import { View, Text, TextInput, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import styles from './UserStyle';
import OneTask from '../../Component/OneTask';
import { v4 as uuid } from 'uuid'

const User = ({ route }) => {
    const { name, email, phone } = route.params;
    const windowHeight = Dimensions.get('window').height;
    return <>
        <SafeAreaView>
            <ScrollView>
                <View style={[styles.container, {height: windowHeight}]}>
                    <View>
                        <Text style={styles.data}>Name: {name}</Text>
                        <Text style={styles.data}>Email: {email}</Text>
                        <Text style={styles.data}>Phone: {phone}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    </>
}

export default User
