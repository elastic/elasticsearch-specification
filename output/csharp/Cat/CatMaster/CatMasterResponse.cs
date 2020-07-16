using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatMasterResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatMasterRecord> Records { get; set; }

	}
}
