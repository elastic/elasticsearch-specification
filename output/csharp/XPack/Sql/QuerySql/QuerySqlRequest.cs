using Nest.Internal;
using Nest.QueryDsl;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class QuerySqlRequest : RequestBase {
		
		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="columnar")]
		public bool Columnar { get; set; }


		[DataMember(Name="cursor")]
		public string Cursor { get; set; }


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
