class KeywordMarkerTokenFilter extends TokenFilterBase {
	ignore_case: boolean;
	keywords: string[];
	keywords_path: string;
	keywords_pattern: string;
}
