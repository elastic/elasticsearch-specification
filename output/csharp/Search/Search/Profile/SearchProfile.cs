using Nest.Search;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class SearchProfile  {
		
		[DataMember(Name="collector")]
		public List<Collector> Collector { get; set; }


		[DataMember(Name="query")]
		public List<QueryProfile> Query { get; set; }


		[DataMember(Name="rewrite_time")]
		public long RewriteTime { get; set; }

	}
}
