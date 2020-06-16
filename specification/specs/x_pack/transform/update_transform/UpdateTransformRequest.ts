@rest_spec_name("transform.update_transform")
class UpdateTransformRequest extends RequestBase {
	@request_parameter()
	defer_validation: boolean;
	description: string;
	source: TransformSource;
	dest: TransformDestination;
	frequency: Time;
	sync: TransformSyncContainer;
}
