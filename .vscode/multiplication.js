num1 = 1;

for(num1= 0; num1<=12; num1++){
    console.log("The " + num1 + "'s Table");
   for (num2=0;num2<=12;num2++){
    console.log(num1 + " X " + num2 + " = " + (num1*num2));
   }
   if(num1<12){
    console.log("___________")
   }
}
