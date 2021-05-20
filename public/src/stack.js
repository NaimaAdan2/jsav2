// Workaround since JSAV does not support adding to array datastructure
function addToArray(jsav, jsavArray, value) {
    var newArr = jsavArray._values
    newArr.push(value)

    jsavArray.hide()
    return jsav.ds.array(newArr) 
}

// Workaround since JSAV does not support adding to array datastructure
function poppedArray(jsav, jsavArray) {
    var newArr = jsavArray._values
    newArr.pop()
   
    jsavArray.hide()
    return jsav.ds.array(newArr)
}


function initiliaseStackVisualisation() {
    // Initialise JSAV container and control buttons
    let pushElement = document.getElementById("push");
    let popElement = document.getElementById("pop");
    let jsav = new JSAV("container");
    let jsavArr = jsav.ds.array([]);
    // Initialise JSAV pointers
    let headPointer;
    let tailPointer;


    // When a user clicks "push" add new value to the array and update pointers
    pushElement.addEventListener("click", function() {
        let input = document.getElementById("userInput")
        let valueToAdd = input.value
        jsavArr = addToArray(jsav, jsavArr, valueToAdd)
        
        // Hide old pointers and create new pointers
        if (headPointer) {
          headPointer.hide()
        }
        if (tailPointer) {
          tailPointer.hide()
        }
        
        tailPointer = jsav.pointer("Tail", jsavArr.index(0), {arrowAnchor: "left top"})
        headPointer = jsav.pointer("Head", jsavArr.index(jsavArr.size() - 1), {arrowAnchor: "left top"})
      })

      // When a user clicks "pop" remove value at head of the array and update pointers
      popElement.addEventListener("click", function() {
          jsavArr = poppedArray(jsav, jsavArr) 
         
          // Hide old pointers and create new pointers
          if (headPointer) {
            headPointer.hide()
          }
          if (tailPointer) {
            tailPointer.hide()
          }
  
          tailPointer = jsav.pointer("Tail", jsavArr.index(0), {arrowAnchor: "left top"})
          headPointer = jsav.pointer("Head", jsavArr.index(jsavArr.size() - 1), {arrowAnchor: "left top"})
      })
}
initiliaseStackVisualisation()



