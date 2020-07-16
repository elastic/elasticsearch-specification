using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class WatcherStatsRequest : RequestBase {
		
		[DataMember(Name="emit_stacktraces")]
		public bool EmitStacktraces { get; set; }

	}
}
