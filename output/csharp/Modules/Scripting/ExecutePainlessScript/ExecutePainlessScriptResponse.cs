using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class ExecutePainlessScriptResponse<TResult> : ResponseBase {
		
		[DataMember(Name="result")]
		public TResult Result { get; set; }

	}
}
