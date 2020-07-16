using Nest.CommonOptions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SuggestFuzziness  {
		
		[DataMember(Name="fuzziness")]
		public Fuzziness Fuzziness { get; set; }


		[DataMember(Name="min_length")]
		public int MinLength { get; set; }


		[DataMember(Name="prefix_length")]
		public int PrefixLength { get; set; }


		[DataMember(Name="transpositions")]
		public bool Transpositions { get; set; }


		[DataMember(Name="unicode_aware")]
		public bool UnicodeAware { get; set; }

	}
}
