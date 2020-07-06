using Nest.QueryDsl;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class AliasDefinition  {
		
		[DataMember(Name="filter")]
		public QueryContainer Filter { get; set; }


		[DataMember(Name="index_routing")]
		public string IndexRouting { get; set; }


		[DataMember(Name="is_write_index")]
		public bool IsWriteIndex { get; set; }


		[DataMember(Name="routing")]
		public string Routing { get; set; }


		[DataMember(Name="search_routing")]
		public string SearchRouting { get; set; }

	}
}
