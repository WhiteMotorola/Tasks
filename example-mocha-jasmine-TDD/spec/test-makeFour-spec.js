var makeFour = require('../task/makeFour.js');
var should = require('chai').should();
var assert = require('chai').assert;

describe("makeFour", function() {
    it("count of bucket should be equal 4", function() {
        expect(makeFour().count).toEqual(4);
    });
});
