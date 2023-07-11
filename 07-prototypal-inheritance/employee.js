function Employee(id, name, city){
    // this -> new object
    this['id'] = id;
    this['name'] = name;
    this['city'] = city;
    // this -> returned by default
}

Employee.prototype['print'] = function(){
    return this['id'] + ' ' + this['name'] + ' ' + this['city']
}

var emp = new Employee(100, 'Magesh','Bangalore')