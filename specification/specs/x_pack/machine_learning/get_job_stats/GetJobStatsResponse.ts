class GetJobStatsResponse extends ResponseBase implements IResponse {
	count: long;
	jobs: JobStats[];
}
