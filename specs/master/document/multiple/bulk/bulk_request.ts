
/**namespace:Document.Multiple.Bulk */
/**custom_serialization*/
interface BulkRequest extends Request {
	Operations: BulkOperation[];
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Timeout: Time;
	/**ambiguous_origin*/
	Fields: Field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}