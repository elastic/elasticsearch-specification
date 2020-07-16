using Nest.XPack;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ChunkingConfig  {
		
		[DataMember(Name="mode")]
		public ChunkingMode Mode { get; set; }


		[DataMember(Name="time_span")]
		public Time TimeSpan { get; set; }

	}
}
