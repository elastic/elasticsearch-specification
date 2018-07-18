export class SpecValidator {
  static validate(program: ts.Program): string[] {
    const errors: string[] = [];
    const emitResult = program.emit();

    const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
    for (const d of allDiagnostics) {
        const message = ts.flattenDiagnosticMessageText(d.messageText, "\n");
        if (d.file == null) {
          errors.push("<global> " + message);
          continue;
        }
        const { line, character } = d.file.getLineAndCharacterOfPosition(d.start);
        const error = d.file.fileName + " " + line + 1 + "," + character + 1 + ":" + message;
        errors.push(error);
    }
    return errors;
  }
}
