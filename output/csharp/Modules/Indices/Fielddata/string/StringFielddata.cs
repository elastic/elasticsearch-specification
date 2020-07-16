using Nest.Modules;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class StringFielddata  {
		
		[DataMember(Name="format")]
		public StringFielddataFormat Format { get; set; }

	}
}
