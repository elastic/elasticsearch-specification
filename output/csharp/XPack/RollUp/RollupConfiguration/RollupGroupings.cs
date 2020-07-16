using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupGroupings  {
		
		[DataMember(Name="date_histogram")]
		public DateHistogramRollupGrouping DateHistogram { get; set; }


		[DataMember(Name="histogram")]
		public HistogramRollupGrouping Histogram { get; set; }


		[DataMember(Name="terms")]
		public TermsRollupGrouping Terms { get; set; }

	}
}
