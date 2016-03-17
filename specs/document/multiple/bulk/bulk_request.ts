
/**namespace:Document.Multiple.Bulk */
/**custom_serialization*/
interface bulk_request extends request {
	Operations: bulk_operation[];
	/**ambiguous_origin*/
	Consistency: Consistency;
	/**ambiguous_origin*/
	Refresh: boolean;
	/**ambiguous_origin*/
	Routing: string;
	/**ambiguous_origin*/
	Timeout: time;
	/**ambiguous_origin*/
	Fields: field[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}