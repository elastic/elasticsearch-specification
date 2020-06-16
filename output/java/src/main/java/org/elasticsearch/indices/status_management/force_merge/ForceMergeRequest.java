
package org.elasticsearch.indices.status_management.force_merge;

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
import org.elasticsearch.internal.*;

public class ForceMergeRequest  implements XContentable<ForceMergeRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public ForceMergeRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public ForceMergeRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField FLUSH = new ParseField("flush");
  private Boolean _flush;
  public Boolean getFlush() { return this._flush; }
  public ForceMergeRequest setFlush(Boolean val) { this._flush = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public ForceMergeRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField MAX_NUM_SEGMENTS = new ParseField("max_num_segments");
  private Long _maxNumSegments;
  public Long getMaxNumSegments() { return this._maxNumSegments; }
  public ForceMergeRequest setMaxNumSegments(Long val) { this._maxNumSegments = val; return this; }


  static final ParseField ONLY_EXPUNGE_DELETES = new ParseField("only_expunge_deletes");
  private Boolean _onlyExpungeDeletes;
  public Boolean getOnlyExpungeDeletes() { return this._onlyExpungeDeletes; }
  public ForceMergeRequest setOnlyExpungeDeletes(Boolean val) { this._onlyExpungeDeletes = val; return this; }


  
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
    if (_flush != null) {
      builder.field(FLUSH.getPreferredName(), _flush);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_maxNumSegments != null) {
      builder.field(MAX_NUM_SEGMENTS.getPreferredName(), _maxNumSegments);
    }
    if (_onlyExpungeDeletes != null) {
      builder.field(ONLY_EXPUNGE_DELETES.getPreferredName(), _onlyExpungeDeletes);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ForceMergeRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ForceMergeRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ForceMergeRequest, Void> PARSER =
    new ObjectParser<>(ForceMergeRequest.class.getName(), false, ForceMergeRequest::new);

  static {
    PARSER.declareBoolean(ForceMergeRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(ForceMergeRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(ForceMergeRequest::setFlush, FLUSH);
    PARSER.declareBoolean(ForceMergeRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareLong(ForceMergeRequest::setMaxNumSegments, MAX_NUM_SEGMENTS);
    PARSER.declareBoolean(ForceMergeRequest::setOnlyExpungeDeletes, ONLY_EXPUNGE_DELETES);
  }

}
