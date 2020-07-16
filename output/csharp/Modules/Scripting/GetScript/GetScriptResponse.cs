using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class GetScriptResponse : IResponse {
		
		[DataMember(Name="script")]
		public StoredScript Script { get; set; }

	}
}
