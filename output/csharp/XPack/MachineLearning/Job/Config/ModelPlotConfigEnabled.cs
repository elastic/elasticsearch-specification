using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ModelPlotConfigEnabled  {
		
		[DataMember(Name="enabled")]
		public bool Enabled { get; set; }

	}
}
