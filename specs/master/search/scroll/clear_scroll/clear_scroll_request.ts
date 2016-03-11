
/**namespace:Search.Scroll.ClearScroll */
interface clear_scroll_request extends request {
	scroll_id: string[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}