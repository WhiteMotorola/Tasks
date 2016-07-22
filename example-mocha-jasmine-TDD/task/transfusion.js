var Bucket = require('./bucket.js');

function transfusion(a, b) {
    if (a instanceof Bucket === false || b instanceof Bucket === false) {
        throw new Error();
    }
    b.takeWater(a);
}

module.exports = transfusion;
