using Nest.Internal;
using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class OverallBucket  {
		
		[DataMember(Name="bucket_span")]
		public long BucketSpan { get; set; }


		[DataMember(Name="is_interim")]
		public bool IsInterim { get; set; }


		[DataMember(Name="jobs")]
		public List<OverallBucketJobInfo> Jobs { get; set; }


		[DataMember(Name="overall_score")]
		public double OverallScore { get; set; }


		[DataMember(Name="result_type")]
		public string ResultType { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }

	}
}
