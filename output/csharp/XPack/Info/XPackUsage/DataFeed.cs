using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DataFeed  {
		
		[DataMember(Name="count")]
		public long Count { get; set; }

	}
}
