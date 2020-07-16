using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class TransportStats  {
		
		[DataMember(Name="rx_count")]
		public long RxCount { get; set; }


		[DataMember(Name="rx_size")]
		public string RxSize { get; set; }


		[DataMember(Name="rx_size_in_bytes")]
		public long RxSizeInBytes { get; set; }


		[DataMember(Name="server_open")]
		public int ServerOpen { get; set; }


		[DataMember(Name="tx_count")]
		public long TxCount { get; set; }


		[DataMember(Name="tx_size")]
		public string TxSize { get; set; }


		[DataMember(Name="tx_size_in_bytes")]
		public long TxSizeInBytes { get; set; }

	}
}
