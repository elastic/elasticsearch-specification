using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatTrainedModelsResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatTrainedModelsRecord> Records { get; set; }

	}
}
