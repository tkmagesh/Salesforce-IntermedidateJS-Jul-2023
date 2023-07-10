function Employee(id, name, city){
    // this -> new object
    this['id'] = id;
    this['name'] = name;
    this['city'] = city;
    // this -> returned by default
}

var emp = new Employee(100, 'Magesh','Bangalore')