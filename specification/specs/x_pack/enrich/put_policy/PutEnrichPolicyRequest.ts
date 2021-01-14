@rest_spec_name("enrich.put_policy")
class PutEnrichPolicyRequest extends RequestBase {
  path_parts?: {
    name: string;
  }
  query_parameters?: {
  }
  body?: {
    geo_match?: EnrichPolicy;
    match?: EnrichPolicy;
  }
}
