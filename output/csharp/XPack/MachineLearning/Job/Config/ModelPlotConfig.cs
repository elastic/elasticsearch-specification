using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ModelPlotConfig  {
		
		[DataMember(Name="terms")]
		public List<Field> Terms { get; set; }

	}
}
