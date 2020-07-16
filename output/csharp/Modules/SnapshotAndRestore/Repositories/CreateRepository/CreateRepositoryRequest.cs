using Nest.CommonOptions;
using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class CreateRepositoryRequest : RequestBase {
		
		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="verify")]
		public bool Verify { get; set; }


		[DataMember(Name="repository")]
		public SnapshotRepository Repository { get; set; }

	}
}
