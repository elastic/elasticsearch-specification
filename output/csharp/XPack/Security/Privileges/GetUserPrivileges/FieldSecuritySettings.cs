using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FieldSecuritySettings  {
		
		[DataMember(Name="except")]
		public List<string> Except { get; set; }


		[DataMember(Name="grant")]
		public List<string> Grant { get; set; }

	}
}
