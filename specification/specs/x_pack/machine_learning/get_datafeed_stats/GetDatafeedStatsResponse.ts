class GetDatafeedStatsResponse extends ResponseBase implements IResponse {
	count: long;
	datafeeds: DatafeedStats[];
}
