using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SetUpgradeModeRequest : RequestBase {
		
		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
