const API_LINK = 'https';
const API_KEY = 'Im90IyZKDs5YPcPK1mHXDmZhR6XDedj2OfWOT9rATvdy9h5RQ-c5X_Jl7itm4ZX0p99ih46ddyvkbOWMg6gqvvsbcSwj5vLa5dDucipS8k74wQrQqrV6I8IHzIboYXYx';

const apiConnection = async () =>  {
    const dataFetch = await fetch(`${API_LINK}k?${API_KEY}`);
    return dataFetch.json()
}

export default apiConnection;