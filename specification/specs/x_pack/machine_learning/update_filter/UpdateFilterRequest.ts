@rest_spec_name("ml.update_filter")
class UpdateFilterRequest extends RequestBase {
	add_items: string[];
	description: string;
	remove_items: string[];
}
