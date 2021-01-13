@rest_spec_name("ccr.forget_follower")
class ForgetFollowerIndexRequest extends RequestBase {
  pathParts?: {
    index: string;
  }
  query_parameters?: {
  }
  body?: {
    follower_cluster?: string;
    follower_index?: IndexName;
    follower_index_uuid?: string;
    leader_remote_cluster?: string;
  }
}
