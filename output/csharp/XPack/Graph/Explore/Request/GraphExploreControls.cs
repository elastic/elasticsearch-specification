using Nest.XPack;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GraphExploreControls  {
		
		[DataMember(Name="sample_diversity")]
		public SampleDiversity SampleDiversity { get; set; }


		[DataMember(Name="sample_size")]
		public int SampleSize { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="use_significance")]
		public bool UseSignificance { get; set; }

	}
}
