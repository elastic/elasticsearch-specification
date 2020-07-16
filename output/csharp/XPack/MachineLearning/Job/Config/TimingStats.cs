using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TimingStats  {
		
		[DataMember(Name="average_bucket_processing_time_ms")]
		public double AverageBucketProcessingTimeMs { get; set; }


		[DataMember(Name="bucket_count")]
		public long BucketCount { get; set; }


		[DataMember(Name="exponential_average_bucket_processing_time_ms")]
		public double ExponentialAverageBucketProcessingTimeMs { get; set; }


		[DataMember(Name="exponential_average_bucket_processing_time_per_hour_ms")]
		public double ExponentialAverageBucketProcessingTimePerHourMs { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="maximum_bucket_processing_time_ms")]
		public double MaximumBucketProcessingTimeMs { get; set; }


		[DataMember(Name="minimum_bucket_processing_time_ms")]
		public double MinimumBucketProcessingTimeMs { get; set; }

	}
}
