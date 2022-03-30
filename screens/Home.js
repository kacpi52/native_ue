import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomTabs from '../components/home/BottomTabs'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'
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
                <Divider width={1} />
                <BottomTabs />
        </SafeAreaView>
    )
}

export default Home
