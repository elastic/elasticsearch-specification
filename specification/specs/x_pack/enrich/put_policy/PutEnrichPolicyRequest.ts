@rest_spec_name("enrich.put_policy")
class PutEnrichPolicyRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    geo_match?: EnrichPolicy;
    match?: EnrichPolicy;
  }
}
