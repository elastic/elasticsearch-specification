using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatHelpRecord : ICatRecord {
		
		[DataMember(Name="endpoint")]
		public string Endpoint { get; set; }

	}
}
