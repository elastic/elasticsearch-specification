using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class ScriptField  {
		
		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
