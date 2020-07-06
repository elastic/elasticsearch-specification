using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodePackagingType  {
		
		[DataMember(Name="count")]
		public int Count { get; set; }


		[DataMember(Name="flavor")]
		public string Flavor { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
