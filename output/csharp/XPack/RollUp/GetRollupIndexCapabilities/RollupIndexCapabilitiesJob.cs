using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupIndexCapabilitiesJob  {
		
		[DataMember(Name="fields")]
		public IDictionary<Field, IDictionary<string, string>> Fields { get; set; }


		[DataMember(Name="index_pattern")]
		public string IndexPattern { get; set; }


		[DataMember(Name="job_id")]
		public string JobId { get; set; }


		[DataMember(Name="rollup_index")]
		public string RollupIndex { get; set; }

	}
}
