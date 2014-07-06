/**
 * Created by Anthony Honstain on 7/5/14.
 */

/**
 * Scope - Page 36
 */

var foo = function () {
    var a = 3, b = 5;

    var bar = function () {
        var b = 7, c = 11;

        a += b + c;
    };

    bar();
};

document.writeln("" + a + " " + b);