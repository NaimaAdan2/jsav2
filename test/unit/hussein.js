/*global ok,test,module,deepEqual,equal,expect,equals,notEqual */
module("hussein", {  });

test("JSAV", function() {
    expect(4);
    ok( JSAV, "JSAV" );
    ok( JSAV.ext, "JSAV extensions");
    ok( JSAV.init, "JSAV init");
    var av = new JSAV("arraycontainer");
    ok( av, "JSAV initialized" );

    var arr = [3, 2, 1]
    var jsavArr = av.ds.array(arr);

    JSAV.ext.husseinsFunction(av, jsavArr)


    console.log("ORIGINAL ARR: " + jsavArr._values)
    av.end()
    console.log("FINISHING ARR: " + jsavArr._values)

    console.log("FINISHED")
});