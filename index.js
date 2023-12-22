const countValue = document.querySelector("#counter");

const increment = ( ) => {
    let value = parseInt(countValue.innerText);  //get the value from ui
    value++;                                    //update the valye
    countValue.innerText = value;              //set the value onto id   
}

const decrement = ( ) => {
    let value = parseInt(countValue.innerText);  //get the value from ui
    value--;                                    //update the valye
    countValue.innerText = value;
}