using Nest.XPack;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AcknowledgeState  {
		
		[DataMember(Name="state")]
		public AcknowledgementState State { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }

	}
}
