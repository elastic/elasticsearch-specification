using Nest.Aggregations;
using Nest.Internal;
using Nest.CommonAbstractions;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Aggregations {

	public class HistogramAggregation  {
		
		[DataMember(Name="extended_bounds")]
		public ExtendedBounds<double> ExtendedBounds { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="interval")]
		public double Interval { get; set; }


		[DataMember(Name="min_doc_count")]
		public int MinDocCount { get; set; }


		[DataMember(Name="missing")]
		public double Missing { get; set; }


		[DataMember(Name="offset")]
		public double Offset { get; set; }


		[DataMember(Name="order")]
		public HistogramOrder Order { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
