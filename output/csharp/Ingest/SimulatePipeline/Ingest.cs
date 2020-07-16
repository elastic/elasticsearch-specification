using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class Ingest  {
		
		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }

	}
}
