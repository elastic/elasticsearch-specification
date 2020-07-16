using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class TaskRetries  {
		
		[DataMember(Name="bulk")]
		public int Bulk { get; set; }


		[DataMember(Name="search")]
		public int Search { get; set; }

	}
}
