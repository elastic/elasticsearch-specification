using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatRepositoriesResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatRepositoriesRecord> Records { get; set; }

	}
}
