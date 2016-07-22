var makeFour = require('../task/makeFour.js');
var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;

describe("makeFour", function() {
    it("count of bucket should be equal 4", function() {
        makeFour().count.should.equal(4);
    });
});
