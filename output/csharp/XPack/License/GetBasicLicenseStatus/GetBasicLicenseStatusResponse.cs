using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetBasicLicenseStatusResponse : IResponse {
		
		[DataMember(Name="eligible_to_start_basic")]
		public bool EligibleToStartBasic { get; set; }

	}
}
