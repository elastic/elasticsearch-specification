
/**namespace:Cat.CatAllocation */
interface cat_allocation_request extends request {
	/**ambiguous_origin*/
	Bytes: Bytes;
	/**ambiguous_origin*/
	Local: boolean;
	/**ambiguous_origin*/
	MasterTimeout: time;
	/**ambiguous_origin*/
	H: string[];
	/**ambiguous_origin*/
	Help: boolean;
	/**ambiguous_origin*/
	V: boolean;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}