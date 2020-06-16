@rest_spec_name("transform.preview_transform")
class PreviewTransformRequest extends RequestBase {
	description: string;
	source: TransformSource;
	dest: TransformDestination;
	frequency: Time;
	pivot: TransformPivot;
	sync: TransformSyncContainer;
}
