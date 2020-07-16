using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class ReindexRethrottleRequest : RequestBase {
		
		[DataMember(Name="requests_per_second")]
		public long RequestsPerSecond { get; set; }

	}
}
