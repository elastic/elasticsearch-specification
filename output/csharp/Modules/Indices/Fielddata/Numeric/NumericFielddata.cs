using Nest.Modules;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class NumericFielddata  {
		
		[DataMember(Name="format")]
		public NumericFielddataFormat Format { get; set; }

	}
}
