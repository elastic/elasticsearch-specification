using Nest.Aggregations;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AsyncSearch<TDocument>  {
		
		[DataMember(Name="aggregations")]
		public IDictionary<string, Aggregate> Aggregations { get; set; }


		[DataMember(Name="_clusters")]
		public ClusterStatistics Clusters { get; set; }


		[DataMember(Name="documents")]
		public List<TDocument> Documents { get; set; }


		[DataMember(Name="fields")]
		public IDictionary<string, LazyDocument> Fields { get; set; }


		[DataMember(Name="hits")]
		public HitsMetadata<TDocument> Hits { get; set; }


		[DataMember(Name="max_score")]
		public double MaxScore { get; set; }


		[DataMember(Name="num_reduce_phases")]
		public long NumReducePhases { get; set; }


		[DataMember(Name="profile")]
		public Profile Profile { get; set; }


		[DataMember(Name="_scroll_id")]
		public string ScrollId { get; set; }


		[DataMember(Name="_shards")]
		public ShardStatistics Shards { get; set; }


		[DataMember(Name="suggest")]
		public SuggestDictionary<TDocument> Suggest { get; set; }


		[DataMember(Name="terminated_early")]
		public bool TerminatedEarly { get; set; }


		[DataMember(Name="timed_out")]
		public bool TimedOut { get; set; }


		[DataMember(Name="took")]
		public long Took { get; set; }

	}
}
