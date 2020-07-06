using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class IcuCollationTokenFilter : TokenFilterBase {
		
		[DataMember(Name="alternate")]
		public IcuCollationAlternate Alternate { get; set; }


		[DataMember(Name="caseFirst")]
		public IcuCollationCaseFirst CaseFirst { get; set; }


		[DataMember(Name="caseLevel")]
		public bool CaseLevel { get; set; }


		[DataMember(Name="country")]
		public string Country { get; set; }


		[DataMember(Name="decomposition")]
		public IcuCollationDecomposition Decomposition { get; set; }


		[DataMember(Name="hiraganaQuaternaryMode")]
		public bool HiraganaQuaternaryMode { get; set; }


		[DataMember(Name="language")]
		public string Language { get; set; }


		[DataMember(Name="numeric")]
		public bool Numeric { get; set; }


		[DataMember(Name="strength")]
		public IcuCollationStrength Strength { get; set; }


		[DataMember(Name="variableTop")]
		public string VariableTop { get; set; }


		[DataMember(Name="variant")]
		public string Variant { get; set; }

	}
}
