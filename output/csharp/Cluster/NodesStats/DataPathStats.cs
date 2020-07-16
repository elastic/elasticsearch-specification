using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class DataPathStats  {
		
		[DataMember(Name="available")]
		public string Available { get; set; }


		[DataMember(Name="available_in_bytes")]
		public long AvailableInBytes { get; set; }


		[DataMember(Name="disk_queue")]
		public string DiskQueue { get; set; }


		[DataMember(Name="disk_reads")]
		public long DiskReads { get; set; }


		[DataMember(Name="disk_read_size")]
		public string DiskReadSize { get; set; }


		[DataMember(Name="disk_read_size_in_bytes")]
		public long DiskReadSizeInBytes { get; set; }


		[DataMember(Name="disk_writes")]
		public long DiskWrites { get; set; }


		[DataMember(Name="disk_write_size")]
		public string DiskWriteSize { get; set; }


		[DataMember(Name="disk_write_size_in_bytes")]
		public long DiskWriteSizeInBytes { get; set; }


		[DataMember(Name="free")]
		public string Free { get; set; }


		[DataMember(Name="free_in_bytes")]
		public long FreeInBytes { get; set; }


		[DataMember(Name="mount")]
		public string Mount { get; set; }


		[DataMember(Name="path")]
		public string Path { get; set; }


		[DataMember(Name="total")]
		public string Total { get; set; }


		[DataMember(Name="total_in_bytes")]
		public long TotalInBytes { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }

	}
}
