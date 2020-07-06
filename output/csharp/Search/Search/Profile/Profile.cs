using Nest.Search;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Search {

	public class Profile  {
		
		[DataMember(Name="shards")]
		public List<ShardProfile> Shards { get; set; }

	}
}
