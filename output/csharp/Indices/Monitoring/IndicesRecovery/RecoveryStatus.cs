using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryStatus  {
		
		[DataMember(Name="shards")]
		public List<ShardRecovery> Shards { get; set; }

	}
}
