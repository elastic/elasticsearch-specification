
package org.elasticsearch.cluster.cluster_allocation_explain;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.request.*;

public class ClusterAllocationExplainRequest extends RequestBase<ClusterAllocationExplainRequest> implements XContentable<ClusterAllocationExplainRequest> {
  
  static final ParseField INCLUDE_DISK_INFO = new ParseField("include_disk_info");
  private Boolean _includeDiskInfo;
  public Boolean getIncludeDiskInfo() { return this._includeDiskInfo; }
  public ClusterAllocationExplainRequest setIncludeDiskInfo(Boolean val) { this._includeDiskInfo = val; return this; }

  static final ParseField INCLUDE_YES_DECISIONS = new ParseField("include_yes_decisions");
  private Boolean _includeYesDecisions;
  public Boolean getIncludeYesDecisions() { return this._includeYesDecisions; }
  public ClusterAllocationExplainRequest setIncludeYesDecisions(Boolean val) { this._includeYesDecisions = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public ClusterAllocationExplainRequest setIndex(String val) { this._index = val; return this; }

  static final ParseField PRIMARY = new ParseField("primary");
  private Boolean _primary;
  public Boolean getPrimary() { return this._primary; }
  public ClusterAllocationExplainRequest setPrimary(Boolean val) { this._primary = val; return this; }

  static final ParseField SHARD = new ParseField("shard");
  private int _shard;
  private boolean _shard$isSet;
  public int getShard() { return this._shard; }
  public ClusterAllocationExplainRequest setShard(int val) {
    this._shard = val;
    _shard$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_includeDiskInfo != null) {
      builder.field(INCLUDE_DISK_INFO.getPreferredName(), _includeDiskInfo);
    }
    if (_includeYesDecisions != null) {
      builder.field(INCLUDE_YES_DECISIONS.getPreferredName(), _includeYesDecisions);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_primary != null) {
      builder.field(PRIMARY.getPreferredName(), _primary);
    }
    if (_shard$isSet) {
      builder.field(SHARD.getPreferredName(), _shard);
    }
  }

  @Override
  public ClusterAllocationExplainRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterAllocationExplainRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterAllocationExplainRequest, Void> PARSER =
    new ObjectParser<>(ClusterAllocationExplainRequest.class.getName(), false, ClusterAllocationExplainRequest::new);

  static {
    PARSER.declareBoolean(ClusterAllocationExplainRequest::setIncludeDiskInfo, INCLUDE_DISK_INFO);
    PARSER.declareBoolean(ClusterAllocationExplainRequest::setIncludeYesDecisions, INCLUDE_YES_DECISIONS);
    PARSER.declareString(ClusterAllocationExplainRequest::setIndex, INDEX);
    PARSER.declareBoolean(ClusterAllocationExplainRequest::setPrimary, PRIMARY);
    PARSER.declareInt(ClusterAllocationExplainRequest::setShard, SHARD);
  }

}
