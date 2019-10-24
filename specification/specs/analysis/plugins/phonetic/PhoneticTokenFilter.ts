class PhoneticTokenFilter extends TokenFilterBase {
	encoder: PhoneticEncoder;
	language_set: PhoneticLanguage[];
	max_code_length: integer;
	name_type: PhoneticNameType;
	replace: boolean;
	rule_type: PhoneticRuleType;
}
