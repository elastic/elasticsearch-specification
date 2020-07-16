using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StartBasicLicenseResponse : IResponse {
		
		[DataMember(Name="acknowledge")]
		public IDictionary<string, List<string>> Acknowledge { get; set; }


		[DataMember(Name="basic_was_started")]
		public bool BasicWasStarted { get; set; }


		[DataMember(Name="error_message")]
		public string ErrorMessage { get; set; }

	}
}
