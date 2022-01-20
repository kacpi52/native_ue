const API_LINK = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood';
const API_KEY = 'Im90IyZKDs5YPcPK1mHXDmZhR6XDedj2OfWOT9rATvdy9h5RQ-c5X_Jl7itm4ZX0p99ih46ddyvkbOWMg6gqvvsbcSwj5vLa5dDucipS8k74wQrQqrV6I8IHzIboYXYx';
const API_OPTIONS ={
    headers:{
        Authorizations: `Bearer ${API_KEY}`,
    },
};

const apiYelpConnection = async (location) =>  {
    const dataFetch = await fetch(API_LINK, API_OPTIONS);
    return dataFetch.json()
}

export default apiYelpConnection;