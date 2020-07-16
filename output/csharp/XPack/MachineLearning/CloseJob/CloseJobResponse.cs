using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CloseJobResponse : IResponse {
		
		[DataMember(Name="closed")]
		public bool Closed { get; set; }

	}
}
