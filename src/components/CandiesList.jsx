import { useEffect, useState } from "react"
import CandyCards from "./CandyCards";




const CandiesList = () => {
    const [candies, setCandies]=useState([])

   
  useEffect(() => {
    const fetchCandies =async()=>{
    const candiesUrl = 'http://localhost:3000/candies';
    try{
        const resp = await fetch(candiesUrl);
        const jsonData = await resp.json();
        console.log(jsonData);
        setCandies(jsonData);

    }
    catch (error){
        console.error("an error has occured while fetching data",error);
        return null;
    }
};

fetchCandies();

  },[]);

const candyDesc = candies.map((candy)=>{

  const btnColor =  candy.inventory >0 ?{backgroundColor:"#ffc520"}: {backgroundColor:"#e42c00"};
  const btnText =  candy.inventory >0 ? 'Add to Cart': "Sold Out";
    


return <CandyCards cardName={candy.name} cardPicture={candy.image} cardPrice={candy.price}  btnColor={btnColor} btnText={btnText}/>

})
return candyDesc



}


export default CandiesList;