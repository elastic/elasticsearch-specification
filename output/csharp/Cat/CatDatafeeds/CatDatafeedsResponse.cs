using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatDatafeedsResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatDatafeedsRecord> Records { get; set; }

	}
}
