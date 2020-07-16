using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardStats  {
		
		[DataMember(Name="commit")]
		public ShardCommit Commit { get; set; }


		[DataMember(Name="completion")]
		public ShardCompletion Completion { get; set; }


		[DataMember(Name="docs")]
		public ShardDocs Docs { get; set; }


		[DataMember(Name="fielddata")]
		public ShardFielddata Fielddata { get; set; }


		[DataMember(Name="flush")]
		public ShardFlush Flush { get; set; }


		[DataMember(Name="get")]
		public ShardGet Get { get; set; }


		[DataMember(Name="indexing")]
		public ShardIndexing Indexing { get; set; }


		[DataMember(Name="merges")]
		public ShardMerges Merges { get; set; }


		[DataMember(Name="shard_path")]
		public ShardPath ShardPath { get; set; }


		[DataMember(Name="query_cache")]
		public ShardQueryCache QueryCache { get; set; }


		[DataMember(Name="recovery")]
		public ShardStatsRecovery Recovery { get; set; }


		[DataMember(Name="refresh")]
		public ShardRefresh Refresh { get; set; }


		[DataMember(Name="request_cache")]
		public ShardRequestCache RequestCache { get; set; }


		[DataMember(Name="routing")]
		public ShardRouting Routing { get; set; }


		[DataMember(Name="search")]
		public ShardSearch Search { get; set; }


		[DataMember(Name="segments")]
		public ShardSegments Segments { get; set; }


		[DataMember(Name="seq_no")]
		public ShardSequenceNumber SeqNo { get; set; }


		[DataMember(Name="store")]
		public ShardStatsStore Store { get; set; }


		[DataMember(Name="translog")]
		public ShardTransactionLog Translog { get; set; }


		[DataMember(Name="warmer")]
		public ShardWarmer Warmer { get; set; }

	}
}
