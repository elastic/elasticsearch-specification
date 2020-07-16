using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class DeleteWatchResponse : IResponse {
		
		[DataMember(Name="found")]
		public bool Found { get; set; }


		[DataMember(Name="_id")]
		public string Id { get; set; }


		[DataMember(Name="_version")]
		public int Version { get; set; }

	}
}
