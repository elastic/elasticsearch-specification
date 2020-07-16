using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class OverallBucketJobInfo  {
		
		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="max_anomaly_score")]
		public double MaxAnomalyScore { get; set; }

	}
}
