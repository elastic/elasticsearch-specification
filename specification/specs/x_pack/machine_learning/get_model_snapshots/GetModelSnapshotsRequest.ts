@rest_spec_name("ml.get_model_snapshots")
class GetModelSnapshotsRequest extends RequestBase {
	descending: boolean;
	end: Date;
	page: Page;
	sort: Field;
	start: Date;
}
