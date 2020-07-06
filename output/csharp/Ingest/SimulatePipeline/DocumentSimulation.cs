using Nest.Ingest;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Ingest {

	public class DocumentSimulation  {
		
		[DataMember(Name="_id")]
		public string Id { get; set; }


		[DataMember(Name="_index")]
		public string Index { get; set; }


		[DataMember(Name="_ingest")]
		public Ingest Ingest { get; set; }


		[DataMember(Name="_parent")]
		public string Parent { get; set; }


		[DataMember(Name="_routing")]
		public string Routing { get; set; }


		[DataMember(Name="_source")]
		public LazyDocument Source { get; set; }


		[DataMember(Name="_type")]
		public string Type { get; set; }

	}
}
