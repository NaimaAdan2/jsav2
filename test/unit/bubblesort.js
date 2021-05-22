/*global ok,test,module,deepEqual,equal,expect,notEqual,arrayUtils */
(function() {
  "use strict";
  module("bubblesort", {  });
test("Initializing from HTML", function() {
  var values = [12, 22, "14", "39", false]; // array in HTML
  expect(10);
  var av = new JSAV("arraycontainer");
  ok( av, "JSAV initialized" );
  ok( av.ds.array, "Array exists" );
  var arr = av.ds.array($("#array"));
  ok( arr, "Array initialized" );
  ok(av.ext.bubblesort, "Bubble sort exists")
  for (var i = 0; i < values.length; i++) {
    deepEqual( arr.value(i), values[i], "Getting value of index " + i );
  }
  equal(arr.id(), "array");
});
})();