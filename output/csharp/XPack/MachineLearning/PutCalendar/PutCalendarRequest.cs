using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutCalendarRequest : RequestBase {
		
		[DataMember(Name="description")]
		public string Description { get; set; }

	}
}
