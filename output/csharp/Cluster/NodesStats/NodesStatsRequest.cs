using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Common;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodesStatsRequest : RequestBase {
		
		[DataMember(Name="completion_fields")]
		public List<Field> CompletionFields { get; set; }


		[DataMember(Name="fielddata_fields")]
		public List<Field> FielddataFields { get; set; }


		[DataMember(Name="fields")]
		public List<Field> Fields { get; set; }


		[DataMember(Name="groups")]
		public bool Groups { get; set; }


		[DataMember(Name="include_segment_file_sizes")]
		public bool IncludeSegmentFileSizes { get; set; }


		[DataMember(Name="level")]
		public Level Level { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="types")]
		public List<string> Types { get; set; }

	}
}
