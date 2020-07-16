using Nest.CommonOptions;
using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class PutScriptRequest : RequestBase {
		
		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="timeout")]
		public Time Timeout { get; set; }


		[DataMember(Name="script")]
		public StoredScript Script { get; set; }

	}
}
