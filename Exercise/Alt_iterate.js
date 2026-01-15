function simple_Iterate(n){
    let str =""
    for(let i=1; i<=n; i++){
    str += "a"
    }
    return console.log(str);
}

simple_Iterate(5); // aaaaa;

// *********************************************
function alt_Iterate(n){
    // this function will help you to console "a" and "A";

    let scream = ""

    for(let i=0; i<=n; i++){
        if(i % 2 === 0){
            scream += "a";
        }else{
            scream += "A";
        }
    }
    return console.log(scream);

}

alt_Iterate(11); // output AaAaAaAaAaA
alt_Iterate(7);  // output AaAaAaA