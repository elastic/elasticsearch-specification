using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutUserResponse : IResponse {
		
		[DataMember(Name="created")]
		public bool Created { get; set; }

	}
}
