class PhoneticTokenFilter extends TokenFilterBase {
	encoder: PhoneticEncoder;
	languageset: PhoneticLanguage[];
	max_code_len: integer;
	name_type: PhoneticNameType;
	replace: boolean;
	rule_type: PhoneticRuleType;
}
