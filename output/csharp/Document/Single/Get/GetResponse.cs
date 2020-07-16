using Nest.CommonAbstractions;
using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class GetResponse<TDocument> : ResponseBase {
		
		[DataMember(Name="fields")]
		public IDictionary<string, LazyDocument> Fields { get; set; }


		[DataMember(Name="found")]
		public bool Found { get; set; }


		[DataMember(Name="_id")]
		public string Id { get; set; }


		[DataMember(Name="_index")]
		public string Index { get; set; }


		[DataMember(Name="_primary_term")]
		public long PrimaryTerm { get; set; }


		[DataMember(Name="_routing")]
		public string Routing { get; set; }


		[DataMember(Name="_seq_no")]
		public long SeqNo { get; set; }


		[DataMember(Name="_source")]
		public TDocument Source { get; set; }


		[DataMember(Name="_type")]
		public string Type { get; set; }


		[DataMember(Name="_version")]
		public long Version { get; set; }

	}
}
