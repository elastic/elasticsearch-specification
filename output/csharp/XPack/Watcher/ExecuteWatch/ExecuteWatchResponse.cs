using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class ExecuteWatchResponse : IResponse {
		
		[DataMember(Name="_id")]
		public string Id { get; set; }


		[DataMember(Name="watch_record")]
		public WatchRecord WatchRecord { get; set; }

	}
}
