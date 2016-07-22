var Bucket = require('../task/bucket.js');
var should = require('chai').should();
var assert = require('chai').assert;

//BDD TESTS
describe("Bucket", function() {

    it("type of bucket size should be number, else throw error", function() {
        assert.throw(function() { new Bucket(true) }, Error);
        assert.throw(function() { new Bucket("Hello") }, Error);
        assert.throw(function() { new Bucket(undefined) }, Error);
        assert.throw(function() { new Bucket({}) }, Error);
        assert.throw(function() { new Bucket(NaN) }, Error);
        assert.throw(function() { new Bucket(null) }, Error);
        assert.throw(function() { new Bucket('') }, Error);
    });
    it("type of bucket size should not be <= 0, else throw error", function() {
        assert.throw(function() { new Bucket(0) }, Error);
        assert.throw(function() { new Bucket(-3) }, Error);
        assert.throw(function() { new Bucket(-100) }, Error);
    });
    it("count of bucket should be equal size", function() {
        var size = 6;
        var a = new Bucket(size);
        a.draw();
        expect(a.count).toEqual(size);
    });
    it("instance of takeWater args should be bucket, else throw error", function() {
        var a = new Bucket(6);

        assert.throw(function() { a.takeWater(1) }, Error);
        assert.throw(function() { a.takeWater(true) }, Error);
        assert.throw(function() { a.takeWater(NaN) }, Error);
        assert.throw(function() { a.takeWater({}) }, Error);
        assert.throw(function() { a.takeWater("HI!") }, Error);
        assert.throw(function() { a.takeWater(undefined) }, Error);
        assert.throw(function() { a.takeWater(null) }, Error);
        assert.throw(function() { a.takeWater([]) }, Error);
    });
    it("bucket should not take more than its size and change another bucket", function () {
        var a = new Bucket(5);
        var b = new Bucket(4);
        a.draw();
        b.takeWater(a);
        expect(b.count).toEqual(4);
        expect(a.count).toEqual(1);

        var c = new Bucket(3);
        var d = new Bucket(5);
        c.draw();
        d.takeWater(c);
        expect(d.count).toEqual(3);
        expect(c.count).toEqual(0);

        b.free();
        b.takeWater(a);
        expect(b.count).toEqual(1);
        expect(a.count).toEqual(0);
    });
    it("should throw error if it have not free space", function () {
        var a = new Bucket(5);
        var b = new Bucket(5);
        a.draw();
        b.draw();
        assert.throw(function() { a.takeWater(b) }, Error);
    });
});
