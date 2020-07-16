using Nest.Cat;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatPendingTasksResponse : ResponseBase {
		
		[DataMember(Name="records")]
		public List<CatPendingTasksRecord> Records { get; set; }

	}
}
