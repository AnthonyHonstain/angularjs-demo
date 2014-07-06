document.writeln('Hello, world!');

/*
* Just a raw dump of the code I am playing with in Javascript TGP
* Chapter 3: Objects
* */
var emptyObject = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

// Javascript TGP Page 22 Chpt 3: Objects
// We are addinga create method to the Object function
// that creates a new object that uses the old object
// as it's prototype.
if (typeof Object.create !== 'function') {
    Object.create = function(o) {
        var F = function () {} ;
        F.prototype = o;
        return new F();
    };
}

var anotherStooge = Object.create(stooge);

anotherStooge.nickname = 'Moe';

document.writeln(anotherStooge["first-name"]);
document.writeln(anotherStooge.profession);
stooge.profession = 'actor';
// We can see that anotherStooge has 'profession' only
// because of the prototype relationship.
document.writeln(anotherStooge.hasOwnProperty('profession').toString());
document.writeln(anotherStooge.profession);
document.writeln("<br/>");

// Try out the delete, notice we are removing it from the prototype.
delete stooge.profession;

var name;
for (name in anotherStooge) {
    if (typeof anotherStooge[name] !== "function") {
        document.writeln(name + ' : ' + anotherStooge[name] + "<br/>");
    }
}

document.writeln("<br/>");
/*
Chapter 4 - Functions - Javascript TGP

Starting - smallest to largest (remember pegs must always be
stacked smallest to largest (largest at bottom) during each step).
 [1]
 [-2]
 [-3-]
 src  |   aux    |  dst
 */
var hanoi = function hanoi(disk, src, aux, dst) {
    if (disk > 0) {
        hanoi(disk - 1, src, dst, aux);
        document.writeln('Move disk ' + disk +
            ' from ' + src + ' to ' + dst);
        document.writeln("<br/>");
        hanoi(disk - 1, aux, src, dst);
    }
};
/*
Frame 1: -> 2
    [3, 'Src', 'Aux', 'Dst']

Frame 2: -> 3
    [2, 'Src', 'Dst', 'Aux']

Frame 3: -> 4
    [1, 'Src', 'Aux', 'Dst']

Frame 4: Done
    [0, 'Src', 'Dst', 'Aux']

Frame 3 -> 4
    print move disk 1 from Src to Dst
    Recurse again

Frame 4: Done
    [0, 'Aux', 'Src', 'Dst']

Frame 3: Done

Frame 2:
    print move disk 2 from 'Src' to 'Aux'
    recurse Again

Frame 3:
    [1, 'Dst', 'Src', 'Aux']
    Frame 3->4 Done
    print move disk 1 from 'Dst' to 'Aux'
    Frame 3-4 Done

Note - totally not obvious to me this function does what it should.
 */
hanoi(3, 'Src', 'Aux', 'Dst');