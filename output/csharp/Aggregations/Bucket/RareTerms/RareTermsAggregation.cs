using Nest.Aggregations;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class RareTermsAggregation  {
		
		[DataMember(Name="exclude")]
		public TermsExclude Exclude { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="include")]
		public TermsInclude Include { get; set; }


		[DataMember(Name="max_doc_count")]
		public long MaxDocCount { get; set; }


		[DataMember(Name="missing")]
		public object Missing { get; set; }


		[DataMember(Name="precision")]
		public double Precision { get; set; }

	}
}
