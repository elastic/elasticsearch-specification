@rest_spec_name("enrich.put_policy")
class PutEnrichPolicyRequest extends RequestBase {
	match: EnrichPolicy;
	geo_match: EnrichPolicy;
}
