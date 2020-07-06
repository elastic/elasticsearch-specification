using Nest.Internal;
using Nest.CommonOptions;
using Nest.Common;
using Nest.Document;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class ReindexOnServerRequest : RequestBase {
		
		[DataMember(Name="refresh")]
		public bool Refresh { get; set; }


		[DataMember(Name="requests_per_second")]
		public long RequestsPerSecond { get; set; }


		[DataMember(Name="scroll")]
		public Time Scroll { get; set; }


		[DataMember(Name="slices")]
		public long Slices { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="wait_for_active_shards")]
		public string WaitForActiveShards { get; set; }


		[DataMember(Name="wait_for_completion")]
		public bool WaitForCompletion { get; set; }


		[DataMember(Name="conflicts")]
		public Conflicts Conflicts { get; set; }


		[DataMember(Name="dest")]
		public ReindexDestination Dest { get; set; }


		[DataMember(Name="max_docs")]
		public long MaxDocs { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }


		[DataMember(Name="size")]
		public long Size { get; set; }


		[DataMember(Name="source")]
		public ReindexSource Source { get; set; }

	}
}
