class ReindexTask {
	node: string;
	id: long;
	type: string;
	action: string;
	status: ReindexStatus;
	description: string;
	start_time_in_millis: long;
	running_time_in_nanos: long;
	cancellable: boolean;
}
