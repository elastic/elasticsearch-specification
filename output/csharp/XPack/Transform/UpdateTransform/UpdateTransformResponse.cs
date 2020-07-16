using Nest.Internal;
using Nest.XPack;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class UpdateTransformResponse : IResponse {
		
		[DataMember(Name="create_time")]
		public long CreateTime { get; set; }


		[DataMember(Name="create_time_date_time")]
		public DateTimeOffset CreateTimeDateTime { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="dest")]
		public TransformDestination Dest { get; set; }


		[DataMember(Name="frequency")]
		public Time Frequency { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="pivot")]
		public TransformPivot Pivot { get; set; }


		[DataMember(Name="source")]
		public TransformSource Source { get; set; }


		[DataMember(Name="sync")]
		public TransformSyncContainer Sync { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
