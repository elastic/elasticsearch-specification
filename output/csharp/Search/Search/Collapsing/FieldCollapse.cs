using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class FieldCollapse  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="inner_hits")]
		public InnerHits InnerHits { get; set; }


		[DataMember(Name="max_concurrent_group_searches")]
		public int MaxConcurrentGroupSearches { get; set; }

	}
}
