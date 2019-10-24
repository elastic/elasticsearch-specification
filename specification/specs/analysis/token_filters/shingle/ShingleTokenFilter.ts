class ShingleTokenFilter extends TokenFilterBase {
	filler_token: string;
	max_shingle_size: integer;
	min_shingle_size: integer;
	output_unigrams: boolean;
	output_unigrams_if_no_shingles: boolean;
	token_separator: string;
}
