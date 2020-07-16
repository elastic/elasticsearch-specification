using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatTemplatesResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatTemplatesRecord> Records { get; set; }

	}
}
