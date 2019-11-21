//blocked scope
/* {
    let number = 1; //number is set locally when it is let and when its var its set globally
    {
        let number = 2;
        console.log(number);
    }
    console.log(number);
} */

for(let i = 0; i < 5; i++){//creates binding for all the i
   setTimeout(() => {
        console.log(i);
   }, 1000) ;
}