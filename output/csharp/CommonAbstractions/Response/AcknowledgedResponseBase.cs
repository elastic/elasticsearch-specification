using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonAbstractions {

	public class AcknowledgedResponseBase : IResponse {
		
		[DataMember(Name="acknowledged")]
		public bool Acknowledged { get; set; }

	}
}
