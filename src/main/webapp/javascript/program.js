document.writeln('Hello, world!');

/*
* Just a raw dump of the code I am playing with in Javascript TGP
* Chapter 3: Objects
* */
var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

// Javascript TGP Page 22 Chpt 3: Objects
// We are addinga create method to the Object function
// that creates a new object that uses the old object
// as it's prototype.
if (typeof Object.create != 'function') {
    Object.create = function(o) {
        var F = function () {} ;
        F.prototype = o;
        return new F();
    };
}

var another_stooge = Object.create(stooge);

another_stooge.nickname = 'Moe';

document.writeln(another_stooge["first-name"]);
document.writeln(another_stooge.profession);
stooge.profession = 'actor';
// We can see that another_stooge has 'profession' only
// because of the prototype relationship.
document.writeln(another_stooge.hasOwnProperty('profession').toString());
document.writeln(another_stooge.profession);
document.writeln("<br/>")

// Try out the delete, notice we are removing it from the prototype.
delete stooge.profession;

var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !=  "function") {
        document.writeln(name + ' : ' + another_stooge[name] + "<br/>");
    }
}