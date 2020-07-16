using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DeactivateWatchResponse : IResponse {
		
		[DataMember(Name="status")]
		public ActivationStatus Status { get; set; }

	}
}
