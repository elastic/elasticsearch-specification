using Nest.Internal;
using Nest.CommonOptions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonOptions {

	public class DateMathTime  {
		
		[DataMember(Name="factor")]
		public int Factor { get; set; }


		[DataMember(Name="interval")]
		public DateMathTimeUnit Interval { get; set; }

	}
}
