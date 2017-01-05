
/**namespace:Modules.Scripting.PutScript */
interface put_script_request extends request {
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