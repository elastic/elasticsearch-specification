
/**namespace:Search.Scroll.Scroll */
interface ScrollRequest extends Request {
	CovariantTypes: Types;
	scroll: Time;
	scroll_id: string;
	/**ambiguous_origin*/
	Source: string;
	/**ambiguous_origin*/
	FilterPath: string;
}