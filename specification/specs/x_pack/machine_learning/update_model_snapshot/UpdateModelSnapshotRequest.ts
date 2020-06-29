@rest_spec_name("ml.update_model_snapshot")
class UpdateModelSnapshotRequest extends RequestBase {
	query_parameters: {
	}
	body: {
		description: string;
		retain: boolean;
	}
}
