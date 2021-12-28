"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrors = exports.EndpointError = void 0;
class EndpointError {
}
exports.EndpointError = EndpointError;
class ValidationErrors {
    constructor() {
        this.generalErrors = [];
        this.endpointErrors = {};
    }
    addEndpointError(endpoint, part, message) {
        let error = this.endpointErrors[endpoint];
        if (error == null) {
            error = { request: [], response: [] };
            this.endpointErrors[endpoint] = error;
        }
        error[part].push(message);
    }
    addGeneralError(message) {
        this.generalErrors.push(message);
    }
    log() {
        let count = 0;
        const logArray = function (errs, prefix = '') {
            for (const err of errs) {
                if (err !== 'Missing request & response') {
                    console.error(`${prefix}${err}`);
                    count++;
                }
            }
        };
        logArray(this.generalErrors);
        const names = Array.from(Object.keys(this.endpointErrors)).sort();
        for (const name of names) {
            const endpointErrs = this.endpointErrors[name];
            if (endpointErrs != null) {
                for (const part of ['request', 'response']) {
                    logArray(endpointErrs[part], `${name} ${part}: `);
                }
            }
        }
        console.error(`${count} errors found.`);
    }
}
exports.ValidationErrors = ValidationErrors;
