using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class RemovePolicyResponse : IResponse {
		
		[DataMember(Name="failed_indexes")]
		public List<string> FailedIndexes { get; set; }


		[DataMember(Name="has_failures")]
		public bool HasFailures { get; set; }

	}
}
