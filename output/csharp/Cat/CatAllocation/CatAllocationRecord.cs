using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatAllocationRecord : ICatRecord {
		
		[DataMember(Name="disk.avail")]
		public string DiskAvail { get; set; }


		[DataMember(Name="disk.indices")]
		public string DiskIndices { get; set; }


		[DataMember(Name="disk.percent")]
		public string DiskPercent { get; set; }


		[DataMember(Name="disk_ratio")]
		public string DiskRatio { get; set; }


		[DataMember(Name="disk.total")]
		public string DiskTotal { get; set; }


		[DataMember(Name="disk.used")]
		public string DiskUsed { get; set; }


		[DataMember(Name="host")]
		public string Host { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="node")]
		public string Node { get; set; }


		[DataMember(Name="shards")]
		public string Shards { get; set; }

	}
}
