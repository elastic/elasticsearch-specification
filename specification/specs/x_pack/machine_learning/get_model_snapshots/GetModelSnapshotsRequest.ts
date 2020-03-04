@rest_spec_name("ml.get_model_snapshots")
class GetModelSnapshotsRequest extends RequestBase {
	desc: boolean;
	end: Date;
	page: Page;
	sort: Field;
	start: Date;
}
