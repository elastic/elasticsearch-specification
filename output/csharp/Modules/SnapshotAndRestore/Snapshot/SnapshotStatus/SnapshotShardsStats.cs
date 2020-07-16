using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class SnapshotShardsStats  {
		
		[DataMember(Name="done")]
		public long Done { get; set; }


		[DataMember(Name="failed")]
		public long Failed { get; set; }


		[DataMember(Name="finalizing")]
		public long Finalizing { get; set; }


		[DataMember(Name="initializing")]
		public long Initializing { get; set; }


		[DataMember(Name="started")]
		public long Started { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }

	}
}
