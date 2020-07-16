using Nest.Common;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class CloseShardResult  {
		
		[DataMember(Name="failures")]
		public List<ShardFailure> Failures { get; set; }

	}
}
