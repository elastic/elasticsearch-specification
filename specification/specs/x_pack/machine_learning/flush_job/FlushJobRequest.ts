@rest_spec_name("xpack.ml.flush_job")
class FlushJobRequest extends RequestBase {
	@prop_serializer("IsoDateTimeConverter")
	advance_time: Date;
	calc_interim: boolean;
	@prop_serializer("IsoDateTimeConverter")
	end: Date;
	@prop_serializer("IsoDateTimeConverter")
	start: Date;
	@request_parameter()
	skip_time: string;
}
