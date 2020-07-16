using Nest.Internal;
using Nest.Analysis;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Analysis {

	public class ShingleTokenFilter : TokenFilterBase {
		
		[DataMember(Name="filler_token")]
		public string FillerToken { get; set; }


		[DataMember(Name="max_shingle_size")]
		public int MaxShingleSize { get; set; }


		[DataMember(Name="min_shingle_size")]
		public int MinShingleSize { get; set; }


		[DataMember(Name="output_unigrams")]
		public bool OutputUnigrams { get; set; }


		[DataMember(Name="output_unigrams_if_no_shingles")]
		public bool OutputUnigramsIfNoShingles { get; set; }


		[DataMember(Name="token_separator")]
		public string TokenSeparator { get; set; }

	}
}
