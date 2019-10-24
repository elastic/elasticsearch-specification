@rest_spec_name("ml.get_datafeed_stats")
class GetDatafeedStatsRequest extends RequestBase {
	@request_parameter()
	allow_no_datafeeds: boolean;
}
