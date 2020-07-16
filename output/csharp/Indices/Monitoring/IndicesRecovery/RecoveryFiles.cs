using Nest.Indices;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryFiles  {
		
		[DataMember(Name="details")]
		public List<RecoveryFileDetails> Details { get; set; }


		[DataMember(Name="percent")]
		public string Percent { get; set; }


		[DataMember(Name="recovered")]
		public long Recovered { get; set; }


		[DataMember(Name="reused")]
		public long Reused { get; set; }


		[DataMember(Name="total")]
		public long Total { get; set; }

	}
}
