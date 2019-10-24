class IcuCollationTokenFilter extends TokenFilterBase {
	alternate: IcuCollationAlternate;
	case_first: IcuCollationCaseFirst;
	case_level: boolean;
	country: string;
	decomposition: IcuCollationDecomposition;
	hiragana_quaternary_mode: boolean;
	language: string;
	numeric: boolean;
	strength: IcuCollationStrength;
	variable_top: string;
	variant: string;
}
