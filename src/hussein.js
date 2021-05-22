/**
* Module that contains support for program code constructs.
* Depends on core.js, anim.js
*/
/*global JSAV, jQuery */
(function($) {
    var codeArr = [
        "function bubbleSort() {",
        "   for (let i = 0; i < arr.size() - 1; i++) {",
        "       for (let j = 0; j < arr.size() - i; j++) {",
        "           if (arr.value(j) > arr.value(j + 1)) {",
        "               arr.swap(j, j + 1);",
        "        }",
        "       }",
        "   }",
        "}"
    ]
    "use strict";
    if (typeof JSAV === "undefined") { return; }

    function husseinsFunction(jsav, arr) {
        var code = jsav.code(codeArr)
        code.setCurrentLine(1)
        jsav.umsg("Starting bubble sort");
        jsav.step()
        for (var numTimes = 0; numTimes < arr.size() - 1; numTimes++) {
            code.setCurrentLine(2)
            jsav.umsg("Starting pass " + parseInt(numTimes + 1));
            jsav.step();
            code.setCurrentLine(3)
            jsav.umsg("For every element do some stuff");
            jsav.step();
            for (var swapIndex = 0; swapIndex < arr.size() - 1; swapIndex++) {
                jsav.umsg("Compare elements");
                arr.highlight(swapIndex);
                arr.highlight(swapIndex + 1)
                code.setCurrentLine(4)
                jsav.step();
                if (arr.value(swapIndex) > arr.value(swapIndex + 1)) {
                    jsav.umsg("Swap elements");
                    arr.swap(swapIndex, swapIndex + 1)
                    code.setCurrentLine(5)
                    jsav.step();
                }
                arr.unhighlight(swapIndex)
            }
            arr.unhighlight(arr.size() - 1)
        }
        code.setCurrentLine(8)
        jsav.umsg("Finished");
        jsav.recorded();
    }

    JSAV.ext.husseinsFunction = husseinsFunction
  }(jQuery));



  // Things to talk about
  // Cant use let
  // Have to use this niggas testing lib (so annoying)