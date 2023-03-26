// get the string from the page
function getValues(){

    // add class invisible to the alert box at the beginning
    document.getElementById("alert").classList.add("invisible");

    // get the entered string
    let userString = document.getElementById("userString").value;

    // backtrack the input string
    let reverseString = backtrackString(userString);

    // display the backtrack string
    displayBacktrackString(reverseString);
}




// backtrack the string
function backtrackString(userString){
    let backtrackString = "";

    // loop to backtrack String
    for(let i = 0 ; i < userString.length; i++){
        backtrackString = userString[i] + backtrackString;
    }

    return backtrackString;
}



// display the backtrack string in the UI
function displayBacktrackString(backtrackString){
    // getting the "msg" id, to display the message
    document.getElementById("msg").innerHTML = `Your BACKTRACK string = ${backtrackString}`;

    // Making the alert "visible"
    document.getElementById("alert").classList.remove("invisible");
}