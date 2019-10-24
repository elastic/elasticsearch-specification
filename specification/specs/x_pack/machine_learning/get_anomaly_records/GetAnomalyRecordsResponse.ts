class GetAnomalyRecordsResponse extends ResponseBase implements IResponse {
	count: long;
	records: AnomalyRecord[];
}
