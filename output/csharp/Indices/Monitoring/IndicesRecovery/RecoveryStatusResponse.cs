using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Indices;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Indices {

	public class RecoveryStatusResponse : DictionaryResponseBase<IndexName, RecoveryStatus> {
		
		[DataMember(Name="indices")]
		public IDictionary<IndexName, RecoveryStatus> Indices { get; set; }

	}
}
