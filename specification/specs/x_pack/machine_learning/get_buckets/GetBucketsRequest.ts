@rest_spec_name("xpack.ml.get_buckets")
class GetBucketsRequest extends RequestBase {
	anomaly_score: double;
	desc: boolean;
	@prop_serializer("IsoDateTimeConverter")
	end: Date;
	exclude_interim: boolean;
	expand: boolean;
	page: Page;
	sort: Field;
	@prop_serializer("IsoDateTimeConverter")
	start: Date;
	@prop_serializer("IsoDateTimeConverter")
	timestamp: Date;
}
