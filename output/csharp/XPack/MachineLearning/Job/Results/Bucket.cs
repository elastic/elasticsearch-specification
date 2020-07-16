using Nest.Internal;
using Nest.XPack;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class Bucket  {
		
		[DataMember(Name="anomaly_score")]
		public double AnomalyScore { get; set; }


		[DataMember(Name="bucket_influencers")]
		public List<BucketInfluencer> BucketInfluencers { get; set; }


		[DataMember(Name="bucket_span")]
		public Time BucketSpan { get; set; }


		[DataMember(Name="event_count")]
		public long EventCount { get; set; }


		[DataMember(Name="initial_anomaly_score")]
		public double InitialAnomalyScore { get; set; }


		[DataMember(Name="is_interim")]
		public bool IsInterim { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="partition_scores")]
		public List<PartitionScore> PartitionScores { get; set; }


		[DataMember(Name="processing_time_ms")]
		public double ProcessingTimeMs { get; set; }


		[DataMember(Name="result_type")]
		public string ResultType { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }

	}
}
