using Nest.Modules;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class ExecutePainlessScriptRequest : RequestBase {
		
		[DataMember(Name="context")]
		public string Context { get; set; }


		[DataMember(Name="context_setup")]
		public PainlessContextSetup ContextSetup { get; set; }


		[DataMember(Name="script")]
		public InlineScript Script { get; set; }

	}
}
