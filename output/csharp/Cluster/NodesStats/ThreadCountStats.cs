using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ThreadCountStats  {
		
		[DataMember(Name="active")]
		public long Active { get; set; }


		[DataMember(Name="completed")]
		public long Completed { get; set; }


		[DataMember(Name="largest")]
		public long Largest { get; set; }


		[DataMember(Name="queue")]
		public long Queue { get; set; }


		[DataMember(Name="rejected")]
		public long Rejected { get; set; }


		[DataMember(Name="threads")]
		public long Threads { get; set; }

	}
}
