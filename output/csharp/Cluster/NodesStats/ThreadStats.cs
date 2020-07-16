using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ThreadStats  {
		
		[DataMember(Name="count")]
		public long Count { get; set; }


		[DataMember(Name="peak_count")]
		public long PeakCount { get; set; }

	}
}
