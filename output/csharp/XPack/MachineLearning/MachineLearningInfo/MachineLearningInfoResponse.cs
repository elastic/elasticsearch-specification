using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class MachineLearningInfoResponse : IResponse {
		
		[DataMember(Name="defaults")]
		public Defaults Defaults { get; set; }


		[DataMember(Name="limits")]
		public Limits Limits { get; set; }


		[DataMember(Name="upgrade_mode")]
		public bool UpgradeMode { get; set; }

	}
}
