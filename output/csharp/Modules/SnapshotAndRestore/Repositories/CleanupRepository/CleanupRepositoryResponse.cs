using Nest.Modules;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class CleanupRepositoryResponse : IResponse {
		
		[DataMember(Name="results")]
		public CleanupRepositoryResults Results { get; set; }

	}
}
