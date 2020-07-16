using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class EstimateModelMemoryResponse : IResponse {
		
		[DataMember(Name="model_memory_estimate")]
		public string ModelMemoryEstimate { get; set; }

	}
}
