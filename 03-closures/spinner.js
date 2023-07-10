
var spinner = (function(){
    var count = 0

    function up(){
        return ++count;
    }

    function down(){
        return --count;
    }

    var spinner = {
        up : up,
        down : down
    }

    return spinner;
})()