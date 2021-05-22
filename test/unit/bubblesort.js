/*global ok,test,module,deepEqual,equal,expect,notEqual,arrayUtils */
(function() {
    "use strict";
    module("bubblesort", {});
  
    test("bubble sort", function() {
      var av = new JSAV("arraycontainer"),
        arr = av.ds.array($("#array")),
        i = 0,
        counter = $("#arraycontainer .jsavcounter");
      arr.highlight(0);
      av.step();
      arr.highlight(1);
      av.recorded(); // will rewind it
      // bind listener to test event firing as well
      av.container.bind("jsav-updatecounter", function(e) { i++; });
      equal("1 / 3", counter.text(), "Testing counter text");
      av.forward();
      equal("2 / 3", counter.text(), "Testing counter text");
      av.forward();
      equal("3 / 3", counter.text(), "Testing counter text");
      av.forward(); // does nothing, updatecounter does not fire
      equal("3 / 3", counter.text(), "Testing counter text");
      av.begin(); // fires two events, one for each step forward
      equal("1 / 3", counter.text(), "Testing counter text");
      av.end(); // fires two events, one for each step backward
      equal("3 / 3", counter.text(), "Testing counter text");
      av.backward();
      equal("2 / 3", counter.text(), "Testing counter text");
      av.forward();
      equal("3 / 3", counter.text(), "Testing counter text");
      av.backward();
      av.backward();
      equal("1 / 3", counter.text(), "Testing counter text");
      av.backward(); // does nothing, updatecounter does not fire
      equal("1 / 3", counter.text(), "Testing counter text");
      equal(i, 10, "Number of updatecounter events fired");
    });
  })();