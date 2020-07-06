using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class IndicesStatsRequest : RequestBase {
		
		[DataMember(Name="completion_fields")]
		public List<Field> CompletionFields { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="fielddata_fields")]
		public List<Field> FielddataFields { get; set; }


		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }


		[DataMember(Name="forbid_closed_indices")]
		public bool ForbidClosedIndices { get; set; }


		[DataMember(Name="groups")]
		public List<string> Groups { get; set; }


		[DataMember(Name="include_segment_file_sizes")]
		public bool IncludeSegmentFileSizes { get; set; }


		[DataMember(Name="include_unloaded_segments")]
		public bool IncludeUnloadedSegments { get; set; }


		[DataMember(Name="level")]
		public Level Level { get; set; }

	}
}
