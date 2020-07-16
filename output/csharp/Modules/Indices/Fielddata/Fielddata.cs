using Nest.Modules;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class Fielddata  {
		
		[DataMember(Name="filter")]
		public FielddataFilter Filter { get; set; }


		[DataMember(Name="loading")]
		public FielddataLoading Loading { get; set; }

	}
}
