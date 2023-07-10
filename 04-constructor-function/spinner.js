
function Spinner(){
    if (!(this instanceof Spinner))
        return new Spinner()
        
    var count = 0;

    this['up'] = function(){
        return ++count;
    }

    this['down'] = function(){
        return --count;
    }
}