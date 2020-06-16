class NoriTokenizer extends TokenizerBase {
	decompound_mode: NoriDecompoundMode;
	discard_punctuation: boolean;
	user_dictionary: string;
	user_dictionary_rules: string[];
}
