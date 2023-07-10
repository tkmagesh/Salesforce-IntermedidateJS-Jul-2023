function spinnerFactory(){
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
}

var spinner1 = spinnerFactory();
var spinner2 = spinnerFactory();
