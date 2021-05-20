function addToArray(jsav, jsavArray, value) {
    var newArr = jsavArray._values
    newArr.push(value)

    jsavArray.hide()
    return jsav.ds.array(newArr) 
}


function poppedArray(jsav, jsavArray) {
    var newArr = jsavArray._values
    newArr.pop()
   
    jsavArray.hide()
    return jsav.ds.array(newArr)
}


function run() {
    let pushElement = document.getElementById("push");
    let popElement = document.getElementById("pop");
    let jsav = new JSAV("container");
    let jsavArr = jsav.ds.array([]);
    let topPointer;
    let bottomPointer;


    pushElement.addEventListener("click", function() {
        let input = document.getElementById("userInput")
        let valueToAdd = input.value
        jsavArr = addToArray(jsav, jsavArr, valueToAdd)
        if (topPointer) {
          topPointer.hide()
        }
        if (bottomPointer) {
          bottomPointer.hide()
        }
        
        bottomPointer = jsav.pointer("Bottom", jsavArr.index(0), {arrowAnchor: "left top"})
        topPointer = jsav.pointer("Top", jsavArr.index(jsavArr.size() - 1), {arrowAnchor: "left top"})
      })

      popElement.addEventListener("click", function() {
          jsavArr = poppedArray(jsav, jsavArr) 
         
          if (topPointer) {
            topPointer.hide()
          }
          if (bottomPointer) {
            bottomPointer.hide()
          }
  
          bottomPointer = jsav.pointer("Bottom", jsavArr.index(0), {arrowAnchor: "left top"})
          topPointer = jsav.pointer("Top", jsavArr.index(jsavArr.size() - 1), {arrowAnchor: "left top"})
      })
}
run()



