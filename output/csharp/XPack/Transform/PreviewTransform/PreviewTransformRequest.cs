using Nest.XPack;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PreviewTransformRequest : RequestBase {
		
		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="dest")]
		public TransformDestination Dest { get; set; }


		[DataMember(Name="frequency")]
		public Time Frequency { get; set; }


		[DataMember(Name="pivot")]
		public TransformPivot Pivot { get; set; }


		[DataMember(Name="source")]
		public TransformSource Source { get; set; }


		[DataMember(Name="sync")]
		public TransformSyncContainer Sync { get; set; }

	}
}
