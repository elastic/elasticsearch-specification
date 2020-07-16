using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AcknowledgeWatchResponse : IResponse {
		
		[DataMember(Name="status")]
		public WatchStatus Status { get; set; }

	}
}
