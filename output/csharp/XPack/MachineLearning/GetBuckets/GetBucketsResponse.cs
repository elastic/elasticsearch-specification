using Nest.XPack;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetBucketsResponse : IResponse {
		
		[DataMember(Name="buckets")]
		public List<Bucket> Buckets { get; set; }


		[DataMember(Name="count")]
		public long Count { get; set; }

	}
}
