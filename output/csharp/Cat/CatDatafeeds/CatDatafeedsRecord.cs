using Nest.XPack;
using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatDatafeedsRecord : ICatRecord {
		
		[DataMember(Name="assignment_explanation")]
		public string AssignmentExplanation { get; set; }


		[DataMember(Name="buckets.count")]
		public string BucketsCount { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="node.address")]
		public string NodeAddress { get; set; }


		[DataMember(Name="node.ephemeral_id")]
		public string NodeEphemeralId { get; set; }


		[DataMember(Name="node.id")]
		public string NodeId { get; set; }


		[DataMember(Name="node.name")]
		public string NodeName { get; set; }


		[DataMember(Name="search.bucket_avg")]
		public string SearchBucketAvg { get; set; }


		[DataMember(Name="search.count")]
		public string SearchCount { get; set; }


		[DataMember(Name="search.exp_avg_hour")]
		public string SearchExpAvgHour { get; set; }


		[DataMember(Name="search.time")]
		public string SearchTime { get; set; }


		[DataMember(Name="state")]
		public DatafeedState State { get; set; }

	}
}
