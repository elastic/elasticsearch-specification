using Nest.Internal;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetModelSnapshotsRequest : RequestBase {
		
		[DataMember(Name="desc")]
		public bool Desc { get; set; }


		[DataMember(Name="end")]
		public DateTimeOffset End { get; set; }


		[DataMember(Name="page")]
		public Page Page { get; set; }


		[DataMember(Name="sort")]
		public Field Sort { get; set; }


		[DataMember(Name="start")]
		public DateTimeOffset Start { get; set; }

	}
}
