using Nest.CommonOptions;
using Nest.QueryDsl;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class PutAliasRequest : RequestBase {
		
		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="filter")]
		public QueryContainer Filter { get; set; }


		[DataMember(Name="index_routing")]
		public Routing IndexRouting { get; set; }


		[DataMember(Name="is_write_index")]
		public bool IsWriteIndex { get; set; }


		[DataMember(Name="routing")]
		public Routing Routing { get; set; }


		[DataMember(Name="search_routing")]
		public Routing SearchRouting { get; set; }

	}
}
