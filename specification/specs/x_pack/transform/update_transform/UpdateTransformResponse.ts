class UpdateTransformResponse extends ResponseBase implements IResponse {
	id: string;
	description: string;
	source: TransformSource;
	dest: TransformDestination;
	frequency: Time;
	pivot: TransformPivot;
	sync: TransformSyncContainer;
	version: string;
	create_time: long;
	create_time_date_time: Date;
}
