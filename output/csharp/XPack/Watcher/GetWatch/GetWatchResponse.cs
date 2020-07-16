using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class GetWatchResponse : IResponse {
		
		[DataMember(Name="found")]
		public bool Found { get; set; }


		[DataMember(Name="_id")]
		public string Id { get; set; }


		[DataMember(Name="status")]
		public WatchStatus Status { get; set; }


		[DataMember(Name="watch")]
		public Watch Watch { get; set; }

	}
}
