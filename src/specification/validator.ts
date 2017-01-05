class SpecValidator
{
  validate(program: ts.Program) : string[]
  {
    let errors: string[] = [];
    let emitResult = program.emit();

    let allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
    for (let d of allDiagnostics)
    {
        let { line, character } = d.file.getLineAndCharacterOfPosition(d.start);
        let message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
        let error = d.file.fileName + " " + line + 1 + "," + character + 1 + ":" + message;
        errors.push(error);
    }
    return errors;
  }
}
export = SpecValidator
