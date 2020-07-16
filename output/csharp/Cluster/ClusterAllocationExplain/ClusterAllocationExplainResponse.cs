using Nest.Internal;
using Nest.Cluster;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cluster {

	public class ClusterAllocationExplainResponse : IResponse {
		
		[DataMember(Name="allocate_explanation")]
		public string AllocateExplanation { get; set; }


		[DataMember(Name="allocation_delay")]
		public string AllocationDelay { get; set; }


		[DataMember(Name="allocation_delay_in_millis")]
		public long AllocationDelayInMillis { get; set; }


		[DataMember(Name="can_allocate")]
		public Decision CanAllocate { get; set; }


		[DataMember(Name="can_move_to_other_node")]
		public Decision CanMoveToOtherNode { get; set; }


		[DataMember(Name="can_rebalance_cluster")]
		public Decision CanRebalanceCluster { get; set; }


		[DataMember(Name="can_rebalance_cluster_decisions")]
		public List<AllocationDecision> CanRebalanceClusterDecisions { get; set; }


		[DataMember(Name="can_rebalance_to_other_node")]
		public Decision CanRebalanceToOtherNode { get; set; }


		[DataMember(Name="can_remain_decisions")]
		public List<AllocationDecision> CanRemainDecisions { get; set; }


		[DataMember(Name="can_remain_on_current_node")]
		public Decision CanRemainOnCurrentNode { get; set; }


		[DataMember(Name="configured_delay")]
		public string ConfiguredDelay { get; set; }


		[DataMember(Name="configured_delay_in_mills")]
		public long ConfiguredDelayInMills { get; set; }


		[DataMember(Name="current_node")]
		public CurrentNode CurrentNode { get; set; }


		[DataMember(Name="current_state")]
		public string CurrentState { get; set; }


		[DataMember(Name="index")]
		public string Index { get; set; }


		[DataMember(Name="move_explanation")]
		public string MoveExplanation { get; set; }


		[DataMember(Name="node_allocation_decisions")]
		public List<NodeAllocationExplanation> NodeAllocationDecisions { get; set; }


		[DataMember(Name="primary")]
		public bool Primary { get; set; }


		[DataMember(Name="rebalance_explanation")]
		public string RebalanceExplanation { get; set; }


		[DataMember(Name="remaining_delay")]
		public string RemainingDelay { get; set; }


		[DataMember(Name="remaining_delay_in_millis")]
		public long RemainingDelayInMillis { get; set; }


		[DataMember(Name="shard")]
		public int Shard { get; set; }


		[DataMember(Name="unassigned_info")]
		public UnassignedInformation UnassignedInfo { get; set; }

	}
}
