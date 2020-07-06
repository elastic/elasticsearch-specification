using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupJobStats  {
		
		[DataMember(Name="documents_processed")]
		public long DocumentsProcessed { get; set; }


		[DataMember(Name="index_failures")]
		public long IndexFailures { get; set; }


		[DataMember(Name="index_time_in_ms")]
		public long IndexTimeInMs { get; set; }


		[DataMember(Name="index_total")]
		public long IndexTotal { get; set; }


		[DataMember(Name="pages_processed")]
		public long PagesProcessed { get; set; }


		[DataMember(Name="rollups_indexed")]
		public long RollupsIndexed { get; set; }


		[DataMember(Name="search_failures")]
		public long SearchFailures { get; set; }


		[DataMember(Name="search_time_in_ms")]
		public long SearchTimeInMs { get; set; }


		[DataMember(Name="search_total")]
		public long SearchTotal { get; set; }


		[DataMember(Name="trigger_count")]
		public long TriggerCount { get; set; }

	}
}
