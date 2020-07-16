using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardFileSizeInfo  {
		
		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="size_in_bytes")]
		public long SizeInBytes { get; set; }

	}
}
