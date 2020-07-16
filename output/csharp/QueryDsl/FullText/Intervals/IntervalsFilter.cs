using Nest.QueryDsl;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.QueryDsl {

	public class IntervalsFilter  {
		
		[DataMember(Name="after")]
		public IntervalsContainer After { get; set; }


		[DataMember(Name="before")]
		public IntervalsContainer Before { get; set; }


		[DataMember(Name="contained_by")]
		public IntervalsContainer ContainedBy { get; set; }


		[DataMember(Name="containing")]
		public IntervalsContainer Containing { get; set; }


		[DataMember(Name="not_contained_by")]
		public IntervalsContainer NotContainedBy { get; set; }


		[DataMember(Name="not_containing")]
		public IntervalsContainer NotContaining { get; set; }


		[DataMember(Name="not_overlapping")]
		public IntervalsContainer NotOverlapping { get; set; }


		[DataMember(Name="overlapping")]
		public IntervalsContainer Overlapping { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
