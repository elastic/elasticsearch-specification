
package org.elasticsearch.cluster.cluster_allocation_explain;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.internal.*;

public class ClusterAllocationExplainRequest  implements XContentable<ClusterAllocationExplainRequest> {
  
  static final ParseField INDEX = new ParseField("index");
  private IndexName _index;
  public IndexName getIndex() { return this._index; }
  public ClusterAllocationExplainRequest setIndex(IndexName val) { this._index = val; return this; }


  static final ParseField PRIMARY = new ParseField("primary");
  private Boolean _primary;
  public Boolean getPrimary() { return this._primary; }
  public ClusterAllocationExplainRequest setPrimary(Boolean val) { this._primary = val; return this; }


  static final ParseField SHARD = new ParseField("shard");
  private Integer _shard;
  public Integer getShard() { return this._shard; }
  public ClusterAllocationExplainRequest setShard(Integer val) { this._shard = val; return this; }


  static final ParseField INCLUDE_DISK_INFO = new ParseField("include_disk_info");
  private Boolean _includeDiskInfo;
  public Boolean getIncludeDiskInfo() { return this._includeDiskInfo; }
  public ClusterAllocationExplainRequest setIncludeDiskInfo(Boolean val) { this._includeDiskInfo = val; return this; }


  static final ParseField INCLUDE_YES_DECISIONS = new ParseField("include_yes_decisions");
  private Boolean _includeYesDecisions;
  public Boolean getIncludeYesDecisions() { return this._includeYesDecisions; }
  public ClusterAllocationExplainRequest setIncludeYesDecisions(Boolean val) { this._includeYesDecisions = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_primary != null) {
      builder.field(PRIMARY.getPreferredName(), _primary);
    }
    if (_shard != null) {
      builder.field(SHARD.getPreferredName(), _shard);
    }
    if (_includeDiskInfo != null) {
      builder.field(INCLUDE_DISK_INFO.getPreferredName(), _includeDiskInfo);
    }
    if (_includeYesDecisions != null) {
      builder.field(INCLUDE_YES_DECISIONS.getPreferredName(), _includeYesDecisions);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterAllocationExplainRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterAllocationExplainRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterAllocationExplainRequest, Void> PARSER =
    new ObjectParser<>(ClusterAllocationExplainRequest.class.getName(), false, ClusterAllocationExplainRequest::new);

  static {
    PARSER.declareObject(ClusterAllocationExplainRequest::setIndex, (p, t) -> IndexName.createFrom(p), INDEX);
    PARSER.declareBoolean(ClusterAllocationExplainRequest::setPrimary, PRIMARY);
    PARSER.declareInt(ClusterAllocationExplainRequest::setShard, SHARD);
    PARSER.declareBoolean(ClusterAllocationExplainRequest::setIncludeDiskInfo, INCLUDE_DISK_INFO);
    PARSER.declareBoolean(ClusterAllocationExplainRequest::setIncludeYesDecisions, INCLUDE_YES_DECISIONS);
  }

}
