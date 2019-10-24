class ShardRecovery {
	id: long;
	index: RecoveryIndexStatus;
	primary: boolean;
	source: RecoveryOrigin;
	stage: string;
	start: RecoveryStartStatus;
	start_time: Date;
	stop_time: Date;
	target: RecoveryOrigin;
	total_time_in_milliseconds: long;
	translog: RecoveryTranslogStatus;
	type: string;
	verify_index: RecoveryVerifyIndex;
}
