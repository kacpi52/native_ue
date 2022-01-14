import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';    // rozbijac komponenty na subkomponenty potem lepiej to z propsami gra 

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItem = () => {
    return (
        <TouchableOpacity>
            <View style={{marginTop:10, padding:15, backgroundColor:'#fff'}}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    )
};

export default RestaurantItem;

const RestaurantImage = () =>(
    <>
        <Image 
        source={{
                uri: "https://b.zmtcdn.com/data/pictures/0/19307150/d61b99c79eec6e6f2c6189ccd798bc07.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        }}
        style={{width:'100%', height:180,}}
        />
        <TouchableOpacity style={{
            position: 'absolute',
            right: 20,
            top:20,
        }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
);

const RestaurantInfo =() =>(
    <View style={{
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
         marginTop:10,
        }} >
    <View>
        <Text style={{fontSize:15, fontWeight:'bold',}}>Farmhouse Kitchen Thai Cousine</Text>
        <Text style={{fontSize:13, color:'gray'}}>30-45 min</Text>    
    </View>
    <View style={{
        backgroundColor:'#eee',
         height:30, 
         width:30, 
         alignItems:'center',
         justifyContent:'center', 
         borderRadius:15,
    }} >
        <Text >4,5</Text>
    </View>        
    </View>
);