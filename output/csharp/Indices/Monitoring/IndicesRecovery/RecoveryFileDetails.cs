using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryFileDetails  {
		
		[DataMember(Name="length")]
		public long Length { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="recovered")]
		public long Recovered { get; set; }

	}
}
