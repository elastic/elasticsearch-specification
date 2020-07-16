using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class HttpStats  {
		
		[DataMember(Name="current_open")]
		public int CurrentOpen { get; set; }


		[DataMember(Name="total_opened")]
		public long TotalOpened { get; set; }

	}
}
