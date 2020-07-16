using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatNodeAttributesResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatNodeAttributesRecord> Records { get; set; }

	}
}
