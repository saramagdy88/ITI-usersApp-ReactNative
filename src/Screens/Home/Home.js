import { SafeAreaView, FlatList, Text, View, Pressable, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import routes from '../../Common/Routes';
import styles from './HomeStyle';
import axios from 'axios';


const Home = () => {
    const { navigate } = useNavigation()
    const [sectionsArr, setSectionsArr] = useState([]);
    const [term, setTerm] = useState('')
    const [searchData, setSearchData] = useState([])
    const handleChange = (value) => {
        setTerm((value))
    }

    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setSectionsArr(response.data))
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        const searchResult = sectionsArr.filter((user) => user.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
        setSearchData(searchResult)
    }, [term, sectionsArr])

    return <>
        <SafeAreaView>
            <FlatList
                style={styles.mainSection}
                data={searchData}
                ListHeaderComponent={
                    <TextInput
                        placeholder={"Search User"}
                        style={styles.input}
                        onChangeText={handleChange}
                        value={term.toString()}
                        editable
                    />
                }
                renderItem={({ item }) => {
                    return <>
                        <View style={styles.container}>
                            <Text>{item.name}</Text>
                            <Pressable style={styles.btn}>
                                <Text onPress={() => navigate(routes.user, item)} style={styles.btnTxt}>Details</Text>
                            </Pressable>
                        </View>
                    </>
                }}>
            </FlatList>
        </SafeAreaView>
    </>
}

export default Home