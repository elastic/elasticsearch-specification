using Nest.Internal;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetDatafeedStatsResponse : IResponse {
		
		[DataMember(Name="count")]
		public long Count { get; set; }


		[DataMember(Name="datafeeds")]
		public List<DatafeedStats> Datafeeds { get; set; }

	}
}
