using Nest.XPack;
using Nest.Internal;
using Nest.CommonAbstractions;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupJobConfiguration  {
		
		[DataMember(Name="cron")]
		public string Cron { get; set; }


		[DataMember(Name="groups")]
		public RollupGroupings Groups { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="index_pattern")]
		public string IndexPattern { get; set; }


		[DataMember(Name="metrics")]
		public List<RollupFieldMetric> Metrics { get; set; }


		[DataMember(Name="page_size")]
		public long PageSize { get; set; }


		[DataMember(Name="rollup_index")]
		public IndexName RollupIndex { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
