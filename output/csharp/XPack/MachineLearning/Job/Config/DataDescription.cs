using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DataDescription  {
		
		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="time_field")]
		public Field TimeField { get; set; }


		[DataMember(Name="time_format")]
		public string TimeFormat { get; set; }

	}
}
