using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DatafeedTimingStats  {
		
		[DataMember(Name="bucket_count")]
		public long BucketCount { get; set; }


		[DataMember(Name="exponential_average_search_time_per_hour_ms")]
		public double ExponentialAverageSearchTimePerHourMs { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="search_count")]
		public long SearchCount { get; set; }


		[DataMember(Name="total_search_time_ms")]
		public double TotalSearchTimeMs { get; set; }

	}
}
