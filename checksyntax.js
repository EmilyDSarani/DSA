//Cristian and I pair programmed it

//Write a function that takes a string of code and uses a Stack for determining if parenthesis and curly braces are properly matched. Return true if correctly formatted, otherwise false

function checkSyntax(str){
    //creating a new class
const stack = new Stack();

//looping through the string that is provided to use
//strings behave like arrays when you loop through them in JS
for(let i=0; i<str.length; i++){

//the last character on the array of the stack, = to char
//this is so we can compare it
//the value is }
    let char = str[str.length-1]
 //  here we check to see if there is a beginning, then we push it in
    if( str[i] === "(" || str[i] === "[" || str[i] === "{"  ){
        stack.push(str[i]);
    } else if(
        //if any of these have both a pair we pop it
        (char === "(" && str[i] === ")") ||
        (char === "{" && str[i] === "}") ||
        (char === "[" && str[i] === "]")

    ){
        stack.pop()
    }
    //if none have a pair, then return false
    else return false;

}
//else do this turnery
return stack.size ? false : true
}




















// if(true) { return; }	//true
// if(true( { return; }	//false
// if(true) { return;	//false
// (if(true) { return; }	//false
// ( true && { name: 'foo' } )	//true
// ( true && { name: 'foo' ) )	//false
// ( true && ( name: 'foo' } )	//false
// ((2 + 3) * (4 + 11 * (2 - 1)))	//true
// ((2 + 3) * (4 + 11 * 2 - 1)))	//false
// ((2 + 3) * (4 + 11 * (2 - 1))	//false