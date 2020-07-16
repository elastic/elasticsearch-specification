using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatSegmentsResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatSegmentsRecord> Records { get; set; }

	}
}
