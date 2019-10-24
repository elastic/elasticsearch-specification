@rest_spec_name("ml.get_influencers")
class GetInfluencersRequest extends RequestBase {
	descending: boolean;
	end: Date;
	exclude_interim: boolean;
	influencer_score: double;
	page: Page;
	sort: Field;
	start: Date;
}
