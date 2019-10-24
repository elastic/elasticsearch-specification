@rest_spec_name("scroll")
class ScrollRequest extends RequestBase {
	@request_parameter()
	total_hits_as_integer: boolean;
	scroll: Time;
	scroll_id: string;
}
