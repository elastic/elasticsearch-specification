using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class VerifyRepositoryRequest : RequestBase {
		
		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }

	}
}
