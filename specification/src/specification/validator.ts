class SpecValidator
{
  validate(program: ts.Program) : string[]
  {
    let errors: string[] = [];
    let emitResult = program.emit();

    let allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
    for (let d of allDiagnostics)
    {
        let message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
        if (d.file == null)
        {
          errors.push("<global> " + message);
          continue;
        }
        let { line, character } = d.file.getLineAndCharacterOfPosition(d.start);
        let error = d.file.fileName + " " + line + 1 + "," + character + 1 + ":" + message;
        errors.push(error);
    }
    return errors;
  }
}
export = SpecValidator
