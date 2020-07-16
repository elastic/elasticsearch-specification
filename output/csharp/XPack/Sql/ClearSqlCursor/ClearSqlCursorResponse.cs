using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ClearSqlCursorResponse : IResponse {
		
		[DataMember(Name="succeeded")]
		public bool Succeeded { get; set; }

	}
}
