@rest_spec_name("ml.revert_model_snapshot")
class RevertModelSnapshotRequest extends RequestBase {
	query_parameters: {
	}
	body: {
		delete_intervening_results: boolean;
	}
}
