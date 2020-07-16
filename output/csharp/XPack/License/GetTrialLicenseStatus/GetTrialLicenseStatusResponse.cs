using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetTrialLicenseStatusResponse : IResponse {
		
		[DataMember(Name="eligible_to_start_trial")]
		public bool EligibleToStartTrial { get; set; }

	}
}
