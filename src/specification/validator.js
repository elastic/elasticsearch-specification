"use strict";
var SpecValidator = (function () {
    function SpecValidator() {
        this.configPath = "./specs/tsconfig.json";
        var config = ts.readConfigFile(this.configPath, function (file) { return ts.sys.readFile(file); });
        var commandLine = ts.parseJsonConfigFileContent(config.config, ts.sys, "./specs");
        this.program = ts.createProgram(commandLine.fileNames, commandLine.options);
    }
    SpecValidator.prototype.validate = function () {
        var errors = [];
        var emitResult = this.program.emit();
        var allDiagnostics = ts.getPreEmitDiagnostics(this.program).concat(emitResult.diagnostics);
        for (var _i = 0, allDiagnostics_1 = allDiagnostics; _i < allDiagnostics_1.length; _i++) {
            var d = allDiagnostics_1[_i];
            var _a = d.file.getLineAndCharacterOfPosition(d.start), line = _a.line, character = _a.character;
            var message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
            var error = d.file.fileName + " " + line + 1 + "," + character + 1 + ":" + message;
            errors.push(error);
        }
        return errors;
    };
    return SpecValidator;
}());
module.exports = SpecValidator;
