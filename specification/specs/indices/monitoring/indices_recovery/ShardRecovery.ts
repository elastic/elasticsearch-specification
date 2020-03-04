class ShardRecovery {
	id: long;
	index: RecoveryIndexStatus;
	primary: boolean;
	source: RecoveryOrigin;
	stage: string;
	start: RecoveryStartStatus;
	start_time_in_millis: Date;
	stop_time_in_millis: Date;
	target: RecoveryOrigin;
	total_time_in_millis: long;
	translog: RecoveryTranslogStatus;
	type: string;
	verify_index: RecoveryVerifyIndex;
}
