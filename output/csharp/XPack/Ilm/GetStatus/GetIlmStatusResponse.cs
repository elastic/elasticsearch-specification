using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetIlmStatusResponse : IResponse {
		
		[DataMember(Name="operation_mode")]
		public LifecycleOperationMode OperationMode { get; set; }

	}
}
