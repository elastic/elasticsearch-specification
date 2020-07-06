using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatHelpResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatHelpRecord> Records { get; set; }

	}
}
