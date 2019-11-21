import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function FOAAS(){
    //variable & the state variable
    const [message, setMessage] = useState("");
    const [subtitle, setSubtitle] = useState("");


    useEffect(async() => {
        const options = {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',

            }
        };
        axios(options);
        axios.get('https://www.foaas.com/fewer/Mirjana/Pernille')
            .then(response => {
                console.log(response.data.message + response.data.subtitle);
                setMessage(response.data.message);
                setSubtitle(response.data.subtitle);
            })
            .catch(err => {
                console.log("this is the error from the request: ", err);
            });

            /* 
            => put async in useEffect(async)
            const response = await axios.get("https://www.foaas.com/fewer/Mirjana/Pernille") */
    }, []);//if we dont put the brackets it will fetch the data all the time

    return (
        //can also use just empty <> </>
        <React.Fragment>
            <h2>{message}</h2>
            <h3>{subtitle}</h3>
        </React.Fragment>  
    );
}