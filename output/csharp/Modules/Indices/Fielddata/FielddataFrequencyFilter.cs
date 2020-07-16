using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class FielddataFrequencyFilter  {
		
		[DataMember(Name="max")]
		public double Max { get; set; }


		[DataMember(Name="min")]
		public double Min { get; set; }


		[DataMember(Name="min_segment_size")]
		public int MinSegmentSize { get; set; }

	}
}
