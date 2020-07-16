using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class FieldSecurity  {
		
		[DataMember(Name="except")]
		public List<Field> Except { get; set; }


		[DataMember(Name="grant")]
		public List<Field> Grant { get; set; }

	}
}
