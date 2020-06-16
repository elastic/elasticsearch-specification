@rest_spec_name("ml.post_data")
@class_serializer("PostJobDataFormatter")
class PostJobDataRequest extends RequestBase {
	@request_parameter()
	reset_end: Date;
	@request_parameter()
	reset_start: Date;
	data: any[];
}
