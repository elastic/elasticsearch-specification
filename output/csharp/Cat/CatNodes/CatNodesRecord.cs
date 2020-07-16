using Nest.Internal;
using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatNodesRecord : ICatRecord {
		
		[DataMember(Name="build")]
		public string Build { get; set; }


		[DataMember(Name="completion_size")]
		public string CompletionSize { get; set; }


		[DataMember(Name="cpu")]
		public string Cpu { get; set; }


		[DataMember(Name="disk_available")]
		public string DiskAvailable { get; set; }


		[DataMember(Name="fielddata_evictions")]
		public string FielddataEvictions { get; set; }


		[DataMember(Name="fielddata_memory")]
		public string FielddataMemory { get; set; }


		[DataMember(Name="file_descriptor_current")]
		public int FileDescriptorCurrent { get; set; }


		[DataMember(Name="file_descriptor_max")]
		public int FileDescriptorMax { get; set; }


		[DataMember(Name="file_descriptor_percent")]
		public int FileDescriptorPercent { get; set; }


		[DataMember(Name="filter_cache_evictions")]
		public string FilterCacheEvictions { get; set; }


		[DataMember(Name="filter_cache_memory")]
		public string FilterCacheMemory { get; set; }


		[DataMember(Name="flush_total")]
		public string FlushTotal { get; set; }


		[DataMember(Name="flush_total_time")]
		public string FlushTotalTime { get; set; }


		[DataMember(Name="get_current")]
		public string GetCurrent { get; set; }


		[DataMember(Name="get_exists_time")]
		public string GetExistsTime { get; set; }


		[DataMember(Name="get_exists_total")]
		public string GetExistsTotal { get; set; }


		[DataMember(Name="get_missing_time")]
		public string GetMissingTime { get; set; }


		[DataMember(Name="get_missing_total")]
		public string GetMissingTotal { get; set; }


		[DataMember(Name="get_time")]
		public string GetTime { get; set; }


		[DataMember(Name="get_total")]
		public string GetTotal { get; set; }


		[DataMember(Name="heap_current")]
		public string HeapCurrent { get; set; }


		[DataMember(Name="heap_max")]
		public string HeapMax { get; set; }


		[DataMember(Name="heap_percent")]
		public string HeapPercent { get; set; }


		[DataMember(Name="id_cache_memory")]
		public string IdCacheMemory { get; set; }


		[DataMember(Name="indexing_delete_current")]
		public string IndexingDeleteCurrent { get; set; }


		[DataMember(Name="indexing_delete_time")]
		public string IndexingDeleteTime { get; set; }


		[DataMember(Name="indexing_delete_total")]
		public string IndexingDeleteTotal { get; set; }


		[DataMember(Name="indexing_index_current")]
		public string IndexingIndexCurrent { get; set; }


		[DataMember(Name="indexing_index_time")]
		public string IndexingIndexTime { get; set; }


		[DataMember(Name="indexing_index_total")]
		public string IndexingIndexTotal { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="jdk")]
		public string Jdk { get; set; }


		[DataMember(Name="load_15m")]
		public string Load_15m { get; set; }


		[DataMember(Name="load_5m")]
		public string Load_5m { get; set; }


		[DataMember(Name="load_1m")]
		public string Load_1m { get; set; }


		[DataMember(Name="master")]
		public string Master { get; set; }


		[DataMember(Name="merges_current")]
		public string MergesCurrent { get; set; }


		[DataMember(Name="merges_current_docs")]
		public string MergesCurrentDocs { get; set; }


		[DataMember(Name="merges_current_size")]
		public string MergesCurrentSize { get; set; }


		[DataMember(Name="merges_total")]
		public string MergesTotal { get; set; }


		[DataMember(Name="merges_total_docs")]
		public string MergesTotalDocs { get; set; }


		[DataMember(Name="merges_total_time")]
		public string MergesTotalTime { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="node_id")]
		public string NodeId { get; set; }


		[DataMember(Name="node_role")]
		public string NodeRole { get; set; }


		[DataMember(Name="percolate_current")]
		public string PercolateCurrent { get; set; }


		[DataMember(Name="percolate_memory")]
		public string PercolateMemory { get; set; }


		[DataMember(Name="percolate_queries")]
		public string PercolateQueries { get; set; }


		[DataMember(Name="percolate_time")]
		public string PercolateTime { get; set; }


		[DataMember(Name="percolate_total")]
		public string PercolateTotal { get; set; }


		[DataMember(Name="pid")]
		public string Pid { get; set; }


		[DataMember(Name="port")]
		public string Port { get; set; }


		[DataMember(Name="ram_current")]
		public string RamCurrent { get; set; }


		[DataMember(Name="ram_max")]
		public string RamMax { get; set; }


		[DataMember(Name="ram_percent")]
		public string RamPercent { get; set; }


		[DataMember(Name="refresh_time")]
		public string RefreshTime { get; set; }


		[DataMember(Name="refresh_total")]
		public string RefreshTotal { get; set; }


		[DataMember(Name="search_fetch_current")]
		public string SearchFetchCurrent { get; set; }


		[DataMember(Name="search_fetch_time")]
		public string SearchFetchTime { get; set; }


		[DataMember(Name="search_fetch_total")]
		public string SearchFetchTotal { get; set; }


		[DataMember(Name="search_open_contexts")]
		public string SearchOpenContexts { get; set; }


		[DataMember(Name="search_query_current")]
		public string SearchQueryCurrent { get; set; }


		[DataMember(Name="search_query_time")]
		public string SearchQueryTime { get; set; }


		[DataMember(Name="search_query_total")]
		public string SearchQueryTotal { get; set; }


		[DataMember(Name="segments_count")]
		public string SegmentsCount { get; set; }


		[DataMember(Name="segments_index_writer_max_memory")]
		public string SegmentsIndexWriterMaxMemory { get; set; }


		[DataMember(Name="segments_index_writer_memory")]
		public string SegmentsIndexWriterMemory { get; set; }


		[DataMember(Name="segments_memory")]
		public string SegmentsMemory { get; set; }


		[DataMember(Name="segments_version_map_memory")]
		public string SegmentsVersionMapMemory { get; set; }


		[DataMember(Name="uptime")]
		public string Uptime { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
