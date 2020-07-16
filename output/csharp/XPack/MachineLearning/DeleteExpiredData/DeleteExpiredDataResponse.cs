using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DeleteExpiredDataResponse : IResponse {
		
		[DataMember(Name="deleted")]
		public bool Deleted { get; set; }

	}
}
