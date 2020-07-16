using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FlushJobResponse : IResponse {
		
		[DataMember(Name="flushed")]
		public bool Flushed { get; set; }

	}
}
