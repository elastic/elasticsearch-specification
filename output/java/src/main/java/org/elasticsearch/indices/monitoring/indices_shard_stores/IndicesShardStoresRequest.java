
package org.elasticsearch.indices.monitoring.indices_shard_stores;

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
import org.elasticsearch.common.*;

public class IndicesShardStoresRequest  implements XContentable<IndicesShardStoresRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public IndicesShardStoresRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public IndicesShardStoresRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public IndicesShardStoresRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private List<String> _status;
  public List<String> getStatus() { return this._status; }
  public IndicesShardStoresRequest setStatus(List<String> val) { this._status = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoIndices != null) {
      builder.field(ALLOW_NO_INDICES.getPreferredName(), _allowNoIndices);
    }
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_status != null) {
      builder.array(STATUS.getPreferredName(), _status);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndicesShardStoresRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndicesShardStoresRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndicesShardStoresRequest, Void> PARSER =
    new ObjectParser<>(IndicesShardStoresRequest.class.getName(), false, IndicesShardStoresRequest::new);

  static {
    PARSER.declareBoolean(IndicesShardStoresRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(IndicesShardStoresRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(IndicesShardStoresRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareStringArray(IndicesShardStoresRequest::setStatus, STATUS);
  }

}
