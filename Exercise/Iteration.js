function iteration(n){
    let str = "hello World";
    for(let i=1; i<=n; i++){
        str= str + "!" // or to another way str += "!";
    };

    return console.log(str);
};

iteration(5); // output "hello World!!!!!"
iteration(10);// output "hello World!!!!!!!!!!"


function scream(n){
    let scream = ""
    for(let i=0; i<=n; i++){
        scream += "a"
    }
    return console.log(scream);
};

scream(5);
scream(8);