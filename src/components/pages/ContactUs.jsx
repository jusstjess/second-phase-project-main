import {React,useState} from 'react';
import Reviews from '../Reviews';
 

const ContactUs = () =>{
    const [textValue,setTextValue]=useState('')

    function handleSubmit(e){
        e.preventDefault();
         return textValu
    }

    return(
        <>
        <h1 id ="ContactUs">Contact Us</h1>
        <p>Hello there! We are here to help with any questions or concerns you may have. <br>
        </br> Please Choose an option to contact us,<br/> so we can help you to resolve any issues<br/>
        or answer any questions you may have. 
        </p>

        <h4 id ="ContactUs">Call Us:</h4><h3> (555)555-5555</h3><br/>
        <h3 id ="ContactUs">Email Us: </h3><h3>Bringtheheatsweets@gmail.com</h3><br/>
        <h3 id ="ContactUs">Leave us a Review Below</h3>

        <form onSubmit={handleSubmit}>
            <input 
             type='text'
            placeholder="Write your review Here"
            value={textValue}
            onChange ={(e)=> setTextValue(e.target.value)}/>
            <button type = "submit">Submit Review</button>
        </form>

        </>
    
    )
}
    
    
export default ContactUs;



// const reviewMessages = candies.map((candy)=>{

//    function getReviews(){

// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

//   return data


//    }


// getReviews();



    







