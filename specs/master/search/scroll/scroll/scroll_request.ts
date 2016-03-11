
/**namespace:Search.Scroll.Scroll */
interface scroll_request extends request {
	CovariantTypes: types;
	scroll: time;
	scroll_id: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}