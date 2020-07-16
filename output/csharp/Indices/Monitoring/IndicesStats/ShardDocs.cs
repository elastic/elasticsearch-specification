using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardDocs  {
		
		[DataMember(Name="count")]
		public long Count { get; set; }


		[DataMember(Name="deleted")]
		public long Deleted { get; set; }

	}
}
