using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatIndicesRecord : ICatRecord {
		
		[DataMember(Name="docs.count")]
		public string DocsCount { get; set; }


		[DataMember(Name="docs.deleted")]
		public string DocsDeleted { get; set; }


		[DataMember(Name="health")]
		public string Health { get; set; }


		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="pri")]
		public string Pri { get; set; }


		[DataMember(Name="pri.store.size")]
		public string PriStoreSize { get; set; }


		[DataMember(Name="rep")]
		public string Rep { get; set; }


		[DataMember(Name="status")]
		public string Status { get; set; }


		[DataMember(Name="store.size")]
		public string StoreSize { get; set; }


		[DataMember(Name="tm")]
		public string Tm { get; set; }


		[DataMember(Name="uuid")]
		public string Uuid { get; set; }

	}
}
