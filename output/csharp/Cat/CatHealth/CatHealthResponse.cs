using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatHealthResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatHealthRecord> Records { get; set; }

	}
}
