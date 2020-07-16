using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardTransactionLog  {
		
		[DataMember(Name="operations")]
		public long Operations { get; set; }


		[DataMember(Name="size_in_bytes")]
		public long SizeInBytes { get; set; }


		[DataMember(Name="uncommitted_operations")]
		public long UncommittedOperations { get; set; }


		[DataMember(Name="uncommitted_size_in_bytes")]
		public long UncommittedSizeInBytes { get; set; }

	}
}
