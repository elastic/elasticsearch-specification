"use strict";
var SpecValidator = require("./specification/validator");
var TypeReader = require("./specification/type-reader");
var changeCase = require('change-case');
var mkdirp = require('mkdirp');
var typescript = require('ntypescript');
var _ = require('lodash');
var specFolder = "./spec";
var Specification = (function () {
    function Specification() {
        this.types = [];
        this.domain_errors = [];
        this.endpoints = [];
        this.endpoint_errors = [];
        var validator = new SpecValidator();
        this.domain_errors = validator.validate();
        if (this.domain_errors.length > 0)
            return;
        var specVisitor = new TypeReader(validator.program);
        console.log(JSON.stringify(specVisitor, null, 2));
    }
    return Specification;
}());
exports.Specification = Specification;
var EndpointReader = (function () {
    function EndpointReader() {
    }
    return EndpointReader;
}());
function read() {
}
