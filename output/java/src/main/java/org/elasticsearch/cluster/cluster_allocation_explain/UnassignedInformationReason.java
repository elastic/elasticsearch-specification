
package org.elasticsearch.cluster.cluster_allocation_explain;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum UnassignedInformationReason implements XContentable<UnassignedInformationReason> {
  IndexCreated("INDEX_CREATED"),
    ClusterRecovered("CLUSTER_RECOVERED"),
    IndexReopened("INDEX_REOPENED"),
    DanglingIndexImported("DANGLING_INDEX_IMPORTED"),
    NewIndexRestored("NEW_INDEX_RESTORED"),
    ExistingIndexRestored("EXISTING_INDEX_RESTORED"),
    ReplicaAdded("REPLICA_ADDED"),
    AllocationFailed("ALLOCATION_FAILED"),
    NodeLeft("NODE_LEFT"),
    RerouteCancelled("REROUTE_CANCELLED"),
    Reinitialized("REINITIALIZED"),
    ReallocatedReplica("REALLOCATED_REPLICA"),
    PrimaryFailed("PRIMARY_FAILED"),
    ForcedEmptyPrimary("FORCED_EMPTY_PRIMARY"),
    ManualAllocation("MANUAL_ALLOCATION");
  private final String textRepresentation;

  private UnassignedInformationReason(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public UnassignedInformationReason fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, UnassignedInformationReason, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "INDEX_CREATED": return UnassignedInformationReason.IndexCreated;
      case "CLUSTER_RECOVERED": return UnassignedInformationReason.ClusterRecovered;
      case "INDEX_REOPENED": return UnassignedInformationReason.IndexReopened;
      case "DANGLING_INDEX_IMPORTED": return UnassignedInformationReason.DanglingIndexImported;
      case "NEW_INDEX_RESTORED": return UnassignedInformationReason.NewIndexRestored;
      case "EXISTING_INDEX_RESTORED": return UnassignedInformationReason.ExistingIndexRestored;
      case "REPLICA_ADDED": return UnassignedInformationReason.ReplicaAdded;
      case "ALLOCATION_FAILED": return UnassignedInformationReason.AllocationFailed;
      case "NODE_LEFT": return UnassignedInformationReason.NodeLeft;
      case "REROUTE_CANCELLED": return UnassignedInformationReason.RerouteCancelled;
      case "REINITIALIZED": return UnassignedInformationReason.Reinitialized;
      case "REALLOCATED_REPLICA": return UnassignedInformationReason.ReallocatedReplica;
      case "PRIMARY_FAILED": return UnassignedInformationReason.PrimaryFailed;
      case "FORCED_EMPTY_PRIMARY": return UnassignedInformationReason.ForcedEmptyPrimary;
      case "MANUAL_ALLOCATION": return UnassignedInformationReason.ManualAllocation;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, UnassignedInformationReason.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
