import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'
import apiYelpConnection from '../lib/ApiService'

const Home = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    useEffect(async () => {
      const apiYelpData = await apiYelpConnection(location);
      setRestaurantData(apiYelpData.businesses)
    }, []);
    
    return (
        <SafeAreaView style={{ backgroundColor: "#eee" , flex:1,}}>
            <View style={{ backgroundColor: "white" , padding:15, }}> 
                <HeaderTabs  />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
