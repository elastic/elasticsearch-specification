using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class ExistsResponse : IResponse {
		
		[DataMember(Name="exists")]
		public bool Exists { get; set; }

	}
}
