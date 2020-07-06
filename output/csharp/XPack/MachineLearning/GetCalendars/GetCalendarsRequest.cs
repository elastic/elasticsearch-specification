using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetCalendarsRequest : RequestBase {
		
		[DataMember(Name="page")]
		public Page Page { get; set; }

	}
}
