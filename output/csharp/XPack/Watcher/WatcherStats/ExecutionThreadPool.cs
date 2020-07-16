using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecutionThreadPool  {
		
		[DataMember(Name="max_size")]
		public long MaxSize { get; set; }


		[DataMember(Name="queue_size")]
		public long QueueSize { get; set; }

	}
}
