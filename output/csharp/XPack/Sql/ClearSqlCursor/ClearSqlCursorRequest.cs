using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ClearSqlCursorRequest : RequestBase {
		
		[DataMember(Name="cursor")]
		public string Cursor { get; set; }

	}
}
