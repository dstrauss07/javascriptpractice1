var matchnum = 17

for(i=1;i<=100;i++){
    if(i % matchnum == 0){
        console.log("Matched " + matchnum + "!"); 
    }else{
        console.log(i);
    }
}