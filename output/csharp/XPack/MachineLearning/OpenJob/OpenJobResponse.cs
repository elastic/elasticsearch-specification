using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class OpenJobResponse : IResponse {
		
		[DataMember(Name="opened")]
		public bool Opened { get; set; }

	}
}
