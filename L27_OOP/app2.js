/**
 * Created by wangguigen on 2016/10/15.
 */
(function () {


    function Person(name) {
        var shenmegui = {}
        shenmegui._name = name;
        shenmegui.sayHello = function () {
            alert("shenmegui:" + shenmegui._name);
        }
        return shenmegui;
    }
    window.Person = Person;
}());

function Teacher(name) {
    var shenmegui = Person(name);
    var superSay = shenmegui.sayHello;
    shenmegui.sayHello = function () {
        superSay.call(shenmegui);
        alert("shenmeguiTeacher:"+shenmegui._name);
    }
    return shenmegui;
}

var t = Teacher("hahage");
t.sayHello();