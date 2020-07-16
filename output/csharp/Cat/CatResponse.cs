using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatResponse<TCatRecord> : IResponse {
		
		[DataMember(Name="records")]
		public List<TCatRecord> Records { get; set; }

	}
}
