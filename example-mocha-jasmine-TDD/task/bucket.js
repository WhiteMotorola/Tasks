function Bucket(size) {
    if (typeof size !== 'number' || isNaN(size) === true || size <= 0) {
        throw new Error();
    }
    this.size = size;
    this.count = 0;
}

Bucket.prototype.draw = function () {
    this.count = this.size;
};
Bucket.prototype.free = function () {
    this.count = 0;
};
Bucket.prototype.takeWater = function (bucket) {
    if (bucket instanceof Bucket === false) {
        throw new Error();
    }

    var hasFree = this.size - this.count;

    if (hasFree === 0) {
        throw new Error();
    }

    if (bucket.count > hasFree) {
        bucket.count -= hasFree;
        this.count = this.size;
        return;
    }

    if (bucket.count === hasFree) {
        bucket.count = 0;
        this.count = this.size;
        return;
    }
    
    if (bucket.count < hasFree) {
        this.count += bucket.count;
        bucket.count = 0;
        return;
    }
};

module.exports = Bucket;
