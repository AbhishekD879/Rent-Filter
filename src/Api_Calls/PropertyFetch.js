import axios from "axios";
export const fetchProperties= async(config)=>{
    const params={}
    for(const key in config){
        if(config[key])params[key]=config[key];
    }
    const option={
        method:"GET",
        headers: {
            'X-RapidAPI-Key':process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
        params:{
            ...params
        },
        url: 'https://bayut.p.rapidapi.com/properties/list'
        }
    // console.log(params)
   return await axios.request(option)
}