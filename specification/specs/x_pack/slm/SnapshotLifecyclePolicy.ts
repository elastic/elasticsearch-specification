class SnapshotLifecyclePolicy {
	config: SnapshotLifecycleConfig;
	name: string;
	repository: string;
	schedule: CronExpression;
	retention: SnapshotRetentionConfiguration;
}
