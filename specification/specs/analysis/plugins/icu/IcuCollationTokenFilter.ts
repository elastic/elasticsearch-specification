class IcuCollationTokenFilter extends TokenFilterBase {
	language: string;
	country: string;
	variant: string;
	strength: IcuCollationStrength;
	decomposition: IcuCollationDecomposition;
	alternate: IcuCollationAlternate;
	caseLevel: boolean;
	caseFirst: IcuCollationCaseFirst;
	numeric: boolean;
	variableTop: string;
	hiraganaQuaternaryMode: boolean;
}
