class GetInfluencersRequest extends RequestBase {
	descending: boolean;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	end: Date;
	exclude_interim: boolean;
	influencer_score: double;
	page: Page;
	sort: Field;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	start: Date;
}
