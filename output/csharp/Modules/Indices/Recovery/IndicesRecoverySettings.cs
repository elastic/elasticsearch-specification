using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Modules {

	public class IndicesRecoverySettings  {
		
		[DataMember(Name="compress")]
		public bool Compress { get; set; }


		[DataMember(Name="concurrent_small_file_streams")]
		public int ConcurrentSmallFileStreams { get; set; }


		[DataMember(Name="concurrent_streams")]
		public int ConcurrentStreams { get; set; }


		[DataMember(Name="file_chunk_size")]
		public string FileChunkSize { get; set; }


		[DataMember(Name="max_bytes_per_second")]
		public string MaxBytesPerSecond { get; set; }


		[DataMember(Name="translog_operations")]
		public int TranslogOperations { get; set; }


		[DataMember(Name="translog_size")]
		public string TranslogSize { get; set; }

	}
}
