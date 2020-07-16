using Nest.Document;
using Nest.Internal;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Document {

	public class BulkResponse : IResponse {
		
		[DataMember(Name="errors")]
		public bool Errors { get; set; }


		[DataMember(Name="items")]
		public List<BulkResponseItemBase> Items { get; set; }


		[DataMember(Name="items_with_errors")]
		public List<BulkResponseItemBase> ItemsWithErrors { get; set; }


		[DataMember(Name="took")]
		public long Took { get; set; }

	}
}
