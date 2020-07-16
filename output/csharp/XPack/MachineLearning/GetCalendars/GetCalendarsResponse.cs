using Nest.XPack;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetCalendarsResponse : IResponse {
		
		[DataMember(Name="calendars")]
		public List<Calendar> Calendars { get; set; }


		[DataMember(Name="count")]
		public long Count { get; set; }

	}
}
