class GetInfluencersResponse extends ResponseBase implements IResponse {
	count: long;
	influencers: BucketInfluencer[];
}
