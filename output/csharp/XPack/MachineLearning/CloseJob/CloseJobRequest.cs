using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class CloseJobRequest : RequestBase {
		
		[DataMember(Name="allow_no_jobs")]
		public bool AllowNoJobs { get; set; }


		[DataMember(Name="force")]
		public bool Force { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
