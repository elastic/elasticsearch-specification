using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatSnapshotsResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatSnapshotsRecord> Records { get; set; }

	}
}
