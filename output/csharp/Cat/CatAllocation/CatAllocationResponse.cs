using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatAllocationResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatAllocationRecord> Records { get; set; }

	}
}
