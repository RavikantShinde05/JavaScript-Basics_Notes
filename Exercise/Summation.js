function summation(n){
    // this function will help you to find sum of all the value from 1 to n;
    sum = 0;
    for (let i=1; i<=n; i++){
    sum = sum + i;
    }
    return console.log(sum);
};
summation(3); // output "6"
summation(9); // output "45"