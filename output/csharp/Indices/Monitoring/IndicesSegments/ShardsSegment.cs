using Nest.Internal;
using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardsSegment  {
		
		[DataMember(Name="num_committed_segments")]
		public int NumCommittedSegments { get; set; }


		[DataMember(Name="routing")]
		public ShardSegmentRouting Routing { get; set; }


		[DataMember(Name="num_search_segments")]
		public int NumSearchSegments { get; set; }


		[DataMember(Name="segments")]
		public IDictionary<string, Segment> Segments { get; set; }

	}
}
