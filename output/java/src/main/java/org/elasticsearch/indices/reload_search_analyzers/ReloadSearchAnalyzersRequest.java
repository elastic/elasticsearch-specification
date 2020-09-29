
package org.elasticsearch.indices.reload_search_analyzers;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.request.*;

public class ReloadSearchAnalyzersRequest extends RequestBase<ReloadSearchAnalyzersRequest> implements XContentable<ReloadSearchAnalyzersRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public ReloadSearchAnalyzersRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }

  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public ReloadSearchAnalyzersRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }

  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public ReloadSearchAnalyzersRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
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
  }

  @Override
  public ReloadSearchAnalyzersRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReloadSearchAnalyzersRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReloadSearchAnalyzersRequest, Void> PARSER =
    new ObjectParser<>(ReloadSearchAnalyzersRequest.class.getName(), false, ReloadSearchAnalyzersRequest::new);

  static {
    PARSER.declareBoolean(ReloadSearchAnalyzersRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(ReloadSearchAnalyzersRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(ReloadSearchAnalyzersRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
  }

}
