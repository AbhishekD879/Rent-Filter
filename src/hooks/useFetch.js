// import { useEffect, useState,memo } from "react";
//  import axios from "axios";
// const useFetch = (url,config) => {
//   const [data, setdata] = useState(null);
//   const [loading, setloading] = useState(true);
//   const [error, seterror] = useState("");
 
// // console.log(option)
// // const memoizedOptions=useMemo(_=>option,[option])
//   useEffect(() => {
//     const params={}
//     for(const key in config){
//         if(config[key])params[key]=config[key];
//     }
//   const option={
//     method:"GET",
//     headers: {
//         'X-RapidAPI-Key': '81e883d18cmsh714fca83528295ep175194jsn0a9b7cc46966',
//         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//     },
//     params:{
//         ...params
//     },
//     url: 'https://bayut.p.rapidapi.com/properties/list'
//     }
//     // fetch(url,option).then((res) => res.json()).then((data) => {
//     //     seterror(data.error)
//     //     setdata(data)
//     //     setloading(false)
//     // })
//     axios.request(option).then(function (response) {
//         setdata(response.data)
//         setloading(false)
//     }).catch(function (error) {
//         seterror(error)
//         setloading(false)
//     });
//   }, [url]);
//  trigger Change
//   return { data, loading, error };
// };
 
// export default useFetch;
