/**
 * Created by wangguigen on 2016/10/15.
 */
(function () {
    var n = "ime";
    function People(name) {
        this._name = name;
    }
    People.prototype.say = function () {
        alert("peo-hello, " + this._name);
    }
    window.People = People;
}());

(function () {
    function Student(name) {
        this._name = name;
    }
    Student.prototype = new People();
    var superSay = Student.prototype.say;
    Student.prototype.say = function () {
        superSay.call(this);
        alert("stu-hello, " + this._name);
    }
    window.Student = Student;
}());

var s = new Student('iwen');
s.say();