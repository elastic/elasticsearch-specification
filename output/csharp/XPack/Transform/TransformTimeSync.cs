using Nest.CommonOptions;
using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class TransformTimeSync  {
		
		[DataMember(Name="delay")]
		public Time Delay { get; set; }


		[DataMember(Name="field")]
		public Field Field { get; set; }

	}
}
