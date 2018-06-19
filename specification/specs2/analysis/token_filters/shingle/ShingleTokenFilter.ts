class ShingleTokenFilter extends TokenFilterBase {
	min_shingle_size: integer;
	max_shingle_size: integer;
	output_unigrams: boolean;
	output_unigrams_if_no_shingles: boolean;
	token_separator: string;
	filler_token: string;
}
