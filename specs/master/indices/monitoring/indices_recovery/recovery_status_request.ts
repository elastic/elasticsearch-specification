
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryStatusRequest extends Request {
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