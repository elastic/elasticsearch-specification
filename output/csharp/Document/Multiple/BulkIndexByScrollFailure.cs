using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class BulkIndexByScrollFailure  {
		
		[DataMember(Name="cause")]
		public MainError Cause { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="status")]
		public int Status { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
