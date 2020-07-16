using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardStoreException  {
		
		[DataMember(Name="reason")]
		public string Reason { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
