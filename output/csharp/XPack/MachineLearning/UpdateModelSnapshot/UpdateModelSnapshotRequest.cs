using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class UpdateModelSnapshotRequest : RequestBase {
		
		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="retain")]
		public bool Retain { get; set; }

	}
}
