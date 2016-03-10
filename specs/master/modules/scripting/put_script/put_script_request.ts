
/**namespace:Modules.Scripting.PutScript */
interface PutScriptRequest extends Request {
	script: string;
	/**ambiguous_origin*/
	OpType: OpType;
	/**ambiguous_origin*/
	Version: long;
	/**ambiguous_origin*/
	VersionType: VersionType;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}