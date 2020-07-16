using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class InnerHitsResult  {
		
		[DataMember(Name="hits")]
		public InnerHitsMetadata Hits { get; set; }

	}
}
