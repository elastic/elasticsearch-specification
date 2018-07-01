@rest_spec_name("xpack.ml.post_data")
@class_serializer("PostJobDataConverter")
class PostJobDataRequest extends RequestBase {
	data: any[];
	@request_parameter()
	reset_start: Date;
	@request_parameter()
	reset_end: Date;
}
