// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE
let changesMade=0
replaceAllButton.addEventListener("click", function () {
    let findInputValue=findInput.value
    let replaceInputValue=replaceInput.value
    // console.log(findInputValue)
    // console.log(replaceInputValue)
    if(findInputValue.length==0||replaceInputValue.length==0){alert('Please input a value')}
    else{
        for(let outerIndex=0;outerIndex<rowElements.length;outerIndex+=1){
            let cellrows=getCellElements(rowElements[outerIndex])
                for(let innerIndex=0;innerIndex<cellrows.length; innerIndex+=1){
                
                    
                    if(cellrows[innerIndex].innerText.includes(findInputValue)){
                    let replacement=cellrows[innerIndex].innerText
                    replacement=replacement.replace(findInputValue,replaceInputValue)
                    cellrows[innerIndex].innerHTML=replacement 
                    changesMade+=1
                    console.log('Changes made so far '+ changesMade)
                    
                    }
                }
        }
    }
})

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
