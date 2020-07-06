using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class NodeInfoJvmMemory  {
		
		[DataMember(Name="direct_max")]
		public string DirectMax { get; set; }


		[DataMember(Name="direct_max_in_bytes")]
		public long DirectMaxInBytes { get; set; }


		[DataMember(Name="heap_init")]
		public string HeapInit { get; set; }


		[DataMember(Name="heap_init_in_bytes")]
		public long HeapInitInBytes { get; set; }


		[DataMember(Name="heap_max")]
		public string HeapMax { get; set; }


		[DataMember(Name="heap_max_in_bytes")]
		public long HeapMaxInBytes { get; set; }


		[DataMember(Name="non_heap_init")]
		public string NonHeapInit { get; set; }


		[DataMember(Name="non_heap_init_in_bytes")]
		public long NonHeapInitInBytes { get; set; }


		[DataMember(Name="non_heap_max")]
		public string NonHeapMax { get; set; }


		[DataMember(Name="non_heap_max_in_bytes")]
		public long NonHeapMaxInBytes { get; set; }

	}
}
