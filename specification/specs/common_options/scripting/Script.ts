class ScriptBase {
  lang: string;
  params?: Dictionary<string, UserDefinedValue>;
}

class InlineScript extends ScriptBase {
  source: string;
}

class IndexedScript extends ScriptBase {
  id: string;
}

type Script = InlineScript | IndexedScript | string;
