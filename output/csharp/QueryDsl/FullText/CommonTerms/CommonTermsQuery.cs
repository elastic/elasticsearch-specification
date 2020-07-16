using Nest.Internal;
using Nest.QueryDsl;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class CommonTermsQuery  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="cutoff_frequency")]
		public double CutoffFrequency { get; set; }


		[DataMember(Name="high_freq_operator")]
		public Operator HighFreqOperator { get; set; }


		[DataMember(Name="low_freq_operator")]
		public Operator LowFreqOperator { get; set; }


		[DataMember(Name="minimum_should_match")]
		public MinimumShouldMatch MinimumShouldMatch { get; set; }


		[DataMember(Name="query")]
		public string Query { get; set; }

	}
}
