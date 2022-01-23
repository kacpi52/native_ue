import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'
import apiYelpConnection from '../lib/ApiService'

const Home = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [activeTab, setActiveTab] = useState('Delivery');
    
    
    return (
        <SafeAreaView style={{ backgroundColor: "#eee" , flex:1,}}>
            <View style={{ backgroundColor: "white" , padding:15, }}> 
                <HeaderTabs  />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Categories />
                <RestaurantItems restaurantData={restaurantData} activeTab={activeTab}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
