using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StartDatafeedResponse : IResponse {
		
		[DataMember(Name="started")]
		public bool Started { get; set; }

	}
}
