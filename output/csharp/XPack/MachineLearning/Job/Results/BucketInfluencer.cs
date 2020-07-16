using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class BucketInfluencer  {
		
		[DataMember(Name="bucket_span")]
		public long BucketSpan { get; set; }


		[DataMember(Name="influencer_field_name")]
		public string InfluencerFieldName { get; set; }


		[DataMember(Name="influencer_field_value")]
		public string InfluencerFieldValue { get; set; }


		[DataMember(Name="influencer_score")]
		public double InfluencerScore { get; set; }


		[DataMember(Name="initial_influencer_score")]
		public double InitialInfluencerScore { get; set; }


		[DataMember(Name="is_interim")]
		public bool IsInterim { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="probability")]
		public double Probability { get; set; }


		[DataMember(Name="result_type")]
		public string ResultType { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }

	}
}
