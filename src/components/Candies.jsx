import { useEffect, useState } from "react"


const Candies = () => {

   
  useEffect(() => {
    const fetchCandies =async()=>{
    const candiesUrl = 'http://localhost:3000/candies';
    try{
        const resp = await fetch(candiesUrl);
        const jsonData = await resp.json();
        console.log(jsonData)
        return jsonData
    }
    catch (error){
        console.error("an error has occured while fetching data",error);
        return null;
    }
};
fetchCandies();

  },[]);
}


export default Candies;