@rest_spec_name("slm.put_lifecycle")
class PutSnapshotLifecycleRequest extends RequestBase {
	config: SnapshotLifecycleConfig;
	name: string;
	repository: string;
	schedule: CronExpression;
}
