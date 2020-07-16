using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Internal {

	public class MainError : ErrorCause {
		
		[DataMember(Name="headers")]
		public IDictionary<string, string> Headers { get; set; }


		[DataMember(Name="root_cause")]
		public List<ErrorCause> RootCause { get; set; }

	}
}
