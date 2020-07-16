using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AlertingCount  {
		
		[DataMember(Name="active")]
		public long Active { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }

	}
}
