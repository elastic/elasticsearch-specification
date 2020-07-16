using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SingleGroupSource  {
		
		[DataMember(Name="field")]
		public Field Field { get; set; }


		[DataMember(Name="script")]
		public Script Script { get; set; }

	}
}
