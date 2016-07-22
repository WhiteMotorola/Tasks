var transfusion = require('../task/transfusion.js');
var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;

describe("transfusion", function() {
    it("instance of transfusion args should be bucket, else throw error", function() {
        assert.throw(function() { transfusion(1, "Hi!") }, Error);
        assert.throw(function() { transfusion(true, undefined) }, Error);
        assert.throw(function() { transfusion(NaN, null) }, Error);
        assert.throw(function() { transfusion({}, []) }, Error);
    });
});
