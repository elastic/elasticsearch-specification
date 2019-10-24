class CreateFollowIndexResponse extends ResponseBase implements IResponse {
	follow_index_created: boolean;
	follow_index_shards_acked: boolean;
	index_following_started: boolean;
}
