using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class MultiGetHit<TDocument>  {
		
		[DataMember(Name="error")]
		public MainError Error { get; set; }


		[DataMember(Name="found")]
		public bool Found { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="primary_term")]
		public long PrimaryTerm { get; set; }


		[DataMember(Name="routing")]
		public string Routing { get; set; }


		[DataMember(Name="sequence_number")]
		public long SequenceNumber { get; set; }


		[DataMember(Name="source")]
		public TDocument Source { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }

	}
}
