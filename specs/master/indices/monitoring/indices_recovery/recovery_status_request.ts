
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_status_request extends request {
	/**ambiguous_origin*/
	Detailed: boolean;
	/**ambiguous_origin*/
	ActiveOnly: boolean;
	/**ambiguous_origin*/
	Human: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}