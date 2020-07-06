using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class StartTrialLicenseResponse : IResponse {
		
		[DataMember(Name="error_message")]
		public string ErrorMessage { get; set; }


		[DataMember(Name="trial_was_started")]
		public bool TrialWasStarted { get; set; }

	}
}
