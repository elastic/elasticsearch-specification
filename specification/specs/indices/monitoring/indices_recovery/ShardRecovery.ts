class ShardRecovery {
	id: long;
	index: RecoveryIndexStatus;
	primary: boolean;
	source: RecoveryOrigin;
	stage: string;
	start: RecoveryStartStatus;
	@prop_serializer("NullableDateTimeEpochMillisecondsFormatter")
	start_time_in_millis: Date;
	@prop_serializer("NullableDateTimeEpochMillisecondsFormatter")
	stop_time_in_millis: Date;
	target: RecoveryOrigin;
	total_time_in_millis: long;
	translog: RecoveryTranslogStatus;
	type: string;
	verify_index: RecoveryVerifyIndex;
}
