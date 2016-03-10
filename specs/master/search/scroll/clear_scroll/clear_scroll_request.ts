
/**namespace:Search.Scroll.ClearScroll */
interface ClearScrollRequest extends Request {
	scroll_id: string[];
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}