function processData(input) {
    //Enter your code here
    
   let inputStrings = input.split("\n") 
   
   for(let i = 1; i < inputStrings.length; i++){
     
       let x = "";
       let y = "";
       for(let j = 0; j < inputStrings[i].length; j++){
           if(j % 2 === 0 ){
               x += inputStrings[i][j];
           }else{
               y += inputStrings[i][j]
           }
       }
       console.log(x.concat(" ", y));
   }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

