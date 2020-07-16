using Nest.Internal;
using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SqlRequest  {
		
		[DataMember(Name="fetch_size")]
		public int FetchSize { get; set; }


		[DataMember(Name="filter")]
		public QueryContainer Filter { get; set; }


		[DataMember(Name="query")]
		public string Query { get; set; }


		[DataMember(Name="time_zone")]
		public string TimeZone { get; set; }

	}
}
