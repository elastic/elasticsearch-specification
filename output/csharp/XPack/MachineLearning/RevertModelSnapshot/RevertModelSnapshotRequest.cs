using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RevertModelSnapshotRequest : RequestBase {
		
		[DataMember(Name="delete_intervening_results")]
		public bool DeleteInterveningResults { get; set; }

	}
}
