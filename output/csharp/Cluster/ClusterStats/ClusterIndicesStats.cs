using Nest.CommonOptions;
using Nest.Internal;
using Nest.Cluster;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterIndicesStats  {
		
		[DataMember(Name="completion")]
		public CompletionStats Completion { get; set; }


		[DataMember(Name="count")]
		public long Count { get; set; }


		[DataMember(Name="docs")]
		public DocStats Docs { get; set; }


		[DataMember(Name="fielddata")]
		public FielddataStats Fielddata { get; set; }


		[DataMember(Name="query_cache")]
		public QueryCacheStats QueryCache { get; set; }


		[DataMember(Name="segments")]
		public SegmentsStats Segments { get; set; }


		[DataMember(Name="shards")]
		public ClusterIndicesShardsStats Shards { get; set; }


		[DataMember(Name="store")]
		public StoreStats Store { get; set; }

	}
}
