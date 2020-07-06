using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AsyncSearchGetRequest : RequestBase {
		
		[DataMember(Name="keep_alive")]
		public Time KeepAlive { get; set; }


		[DataMember(Name="typed_keys")]
		public bool TypedKeys { get; set; }


		[DataMember(Name="wait_for_completion_timeout")]
		public Time WaitForCompletionTimeout { get; set; }

	}
}
