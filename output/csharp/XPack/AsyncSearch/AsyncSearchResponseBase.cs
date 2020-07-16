using Nest.Internal;
using Nest.XPack;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class AsyncSearchResponseBase<TDocument> : ResponseBase {
		
		[DataMember(Name="expiration_time")]
		public DateTimeOffset ExpirationTime { get; set; }


		[DataMember(Name="expiration_time_in_millis")]
		public long ExpirationTimeInMillis { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="is_partial")]
		public bool IsPartial { get; set; }


		[DataMember(Name="is_running")]
		public bool IsRunning { get; set; }


		[DataMember(Name="response")]
		public AsyncSearch<TDocument> Response { get; set; }


		[DataMember(Name="start_time")]
		public DateTimeOffset StartTime { get; set; }


		[DataMember(Name="start_time_in_millis")]
		public long StartTimeInMillis { get; set; }

	}
}
