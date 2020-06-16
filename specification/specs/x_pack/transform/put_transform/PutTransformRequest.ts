@rest_spec_name("transform.put_transform")
class PutTransformRequest extends RequestBase {
	@request_parameter()
	defer_validation: boolean;
	description: string;
	source: TransformSource;
	dest: TransformDestination;
	frequency: Time;
	pivot: TransformPivot;
	sync: TransformSyncContainer;
}
