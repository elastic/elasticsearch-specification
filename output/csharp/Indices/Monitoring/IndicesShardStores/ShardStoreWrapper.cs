using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ShardStoreWrapper  {
		
		[DataMember(Name="stores")]
		public List<ShardStore> Stores { get; set; }

	}
}
