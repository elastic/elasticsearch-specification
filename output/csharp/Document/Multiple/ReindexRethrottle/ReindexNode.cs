using Nest.CommonAbstractions;
using Nest.Internal;
using Nest.Document;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class ReindexNode  {
		
		[DataMember(Name="attributes")]
		public IDictionary<string, string> Attributes { get; set; }


		[DataMember(Name="host")]
		public string Host { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="roles")]
		public List<string> Roles { get; set; }


		[DataMember(Name="tasks")]
		public IDictionary<TaskId, ReindexTask> Tasks { get; set; }


		[DataMember(Name="transport_address")]
		public string TransportAddress { get; set; }

	}
}
