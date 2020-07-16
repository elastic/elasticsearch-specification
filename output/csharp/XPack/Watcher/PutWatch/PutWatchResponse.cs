using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class PutWatchResponse : IResponse {
		
		[DataMember(Name="created")]
		public bool Created { get; set; }


		[DataMember(Name="_id")]
		public string Id { get; set; }


		[DataMember(Name="_primary_term")]
		public long PrimaryTerm { get; set; }


		[DataMember(Name="_seq_no")]
		public long SeqNo { get; set; }


		[DataMember(Name="_version")]
		public int Version { get; set; }

	}
}
