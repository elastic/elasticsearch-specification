class GetDatafeedsResponse extends ResponseBase implements IResponse {
	count: long;
	datafeeds: DatafeedConfig[];
}
