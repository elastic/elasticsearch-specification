@rest_spec_name("scripts_painless_execute")
class ExecutePainlessScriptRequest extends RequestBase {
	context: string;
	context_setup: PainlessContextSetup;
	script: InlineScript;
}
