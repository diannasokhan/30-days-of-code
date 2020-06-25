process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let numSwaps = 0;
    for(let i = 0; i < a.length; i++){
        for(let j = i + 1; j < a.length; j++){
            if(a[i] > a[j]){
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
                numSwaps += 1;
            }
        }
    }

    console.log("Array is sorted in " + numSwaps + " swaps." +
    "\n" + "First Element: " + a[0] + "\n" + "Last Element: " + a[a.length - 1]
    )
    
}