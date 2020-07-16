using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RollupJobStatus  {
		
		[DataMember(Name="current_position")]
		public IDictionary<string, object> CurrentPosition { get; set; }


		[DataMember(Name="job_state")]
		public IndexingJobState JobState { get; set; }


		[DataMember(Name="upgraded_doc_id")]
		public bool UpgradedDocId { get; set; }

	}
}
