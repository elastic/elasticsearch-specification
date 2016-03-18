class SpecValidator
{
  private configPath = "./specs/tsconfig.json";
  program: ts.Program;
  constructor()
  {
    let config = ts.readConfigFile(this.configPath, file => ts.sys.readFile(file));
    let commandLine = ts.parseJsonConfigFileContent(config.config, ts.sys, "./specs");
    this.program = ts.createProgram(commandLine.fileNames, commandLine.options);
  }

  validate() : string[]
  {
    let errors: string[] = [];
    let emitResult = this.program.emit();

    let allDiagnostics = ts.getPreEmitDiagnostics(this.program).concat(emitResult.diagnostics);
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
