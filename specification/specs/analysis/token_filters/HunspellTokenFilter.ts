class HunspellTokenFilter extends TokenFilterBase {
	locale: string;
	dictionary: string;
	dedup: boolean;
	longest_only: boolean;
}
