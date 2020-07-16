using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class JvmPool  {
		
		[DataMember(Name="max")]
		public string Max { get; set; }


		[DataMember(Name="max_in_bytes")]
		public long MaxInBytes { get; set; }


		[DataMember(Name="peak_max")]
		public string PeakMax { get; set; }


		[DataMember(Name="peak_max_in_bytes")]
		public long PeakMaxInBytes { get; set; }


		[DataMember(Name="peak_used")]
		public string PeakUsed { get; set; }


		[DataMember(Name="peak_used_in_bytes")]
		public long PeakUsedInBytes { get; set; }


		[DataMember(Name="used")]
		public string Used { get; set; }


		[DataMember(Name="used_in_bytes")]
		public long UsedInBytes { get; set; }

	}
}
