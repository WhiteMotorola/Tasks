var transfusion = require('./transfusion.js');
var Bucket = require('./bucket.js');

function makeFour () {
    var a = new Bucket(5);
    var b = new Bucket(3);

    b.draw();
    transfusion(b, a);
    b.draw();
    transfusion(b, a);
    a.free();
    transfusion(b, a);
    b.draw();
    transfusion(b, a);

    return a;
}

module.exports = makeFour;
