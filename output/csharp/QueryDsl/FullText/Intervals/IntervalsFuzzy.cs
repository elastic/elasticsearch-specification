using Nest.CommonOptions;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class IntervalsFuzzy  {
		
		[DataMember(Name="analyzer")]
		public string Analyzer { get; set; }


		[DataMember(Name="fuzziness")]
		public Fuzziness Fuzziness { get; set; }


		[DataMember(Name="prefix_length")]
		public int PrefixLength { get; set; }


		[DataMember(Name="term")]
		public string Term { get; set; }


		[DataMember(Name="transpositions")]
		public bool Transpositions { get; set; }


		[DataMember(Name="use_field")]
		public Field UseField { get; set; }

	}
}
