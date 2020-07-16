using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ActivationState  {
		
		[DataMember(Name="active")]
		public bool Active { get; set; }


		[DataMember(Name="timestamp")]
		public DateTimeOffset Timestamp { get; set; }

	}
}
