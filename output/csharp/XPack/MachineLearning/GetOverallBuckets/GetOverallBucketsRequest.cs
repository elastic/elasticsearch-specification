using Nest.CommonOptions;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetOverallBucketsRequest : RequestBase {
		
		[DataMember(Name="allow_no_jobs")]
		public bool AllowNoJobs { get; set; }


		[DataMember(Name="bucket_span")]
		public Time BucketSpan { get; set; }


		[DataMember(Name="end")]
		public DateTimeOffset End { get; set; }


		[DataMember(Name="exclude_interim")]
		public bool ExcludeInterim { get; set; }


		[DataMember(Name="overall_score")]
		public double OverallScore { get; set; }


		[DataMember(Name="start")]
		public DateTimeOffset Start { get; set; }


		[DataMember(Name="top_n")]
		public int TopN { get; set; }

	}
}
