using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RolloverIndexResponse : IResponse {
		
		[DataMember(Name="conditions")]
		public IDictionary<string, bool> Conditions { get; set; }


		[DataMember(Name="dry_run")]
		public bool DryRun { get; set; }


		[DataMember(Name="new_index")]
		public string NewIndex { get; set; }


		[DataMember(Name="old_index")]
		public string OldIndex { get; set; }


		[DataMember(Name="rolled_over")]
		public bool RolledOver { get; set; }


		[DataMember(Name="shards_acknowledged")]
		public bool ShardsAcknowledged { get; set; }

	}
}
