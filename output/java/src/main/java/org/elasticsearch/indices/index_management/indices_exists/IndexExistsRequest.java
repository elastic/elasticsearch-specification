
package org.elasticsearch.indices.index_management.indices_exists;

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

public class IndexExistsRequest  implements XContentable<IndexExistsRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public IndexExistsRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public IndexExistsRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField FLAT_SETTINGS = new ParseField("flat_settings");
  private Boolean _flatSettings;
  public Boolean getFlatSettings() { return this._flatSettings; }
  public IndexExistsRequest setFlatSettings(Boolean val) { this._flatSettings = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public IndexExistsRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField INCLUDE_DEFAULTS = new ParseField("include_defaults");
  private Boolean _includeDefaults;
  public Boolean getIncludeDefaults() { return this._includeDefaults; }
  public IndexExistsRequest setIncludeDefaults(Boolean val) { this._includeDefaults = val; return this; }


  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public IndexExistsRequest setLocal(Boolean val) { this._local = val; return this; }


  
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
    if (_flatSettings != null) {
      builder.field(FLAT_SETTINGS.getPreferredName(), _flatSettings);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_includeDefaults != null) {
      builder.field(INCLUDE_DEFAULTS.getPreferredName(), _includeDefaults);
    }
    if (_local != null) {
      builder.field(LOCAL.getPreferredName(), _local);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexExistsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexExistsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexExistsRequest, Void> PARSER =
    new ObjectParser<>(IndexExistsRequest.class.getName(), false, IndexExistsRequest::new);

  static {
    PARSER.declareBoolean(IndexExistsRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(IndexExistsRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(IndexExistsRequest::setFlatSettings, FLAT_SETTINGS);
    PARSER.declareBoolean(IndexExistsRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(IndexExistsRequest::setIncludeDefaults, INCLUDE_DEFAULTS);
    PARSER.declareBoolean(IndexExistsRequest::setLocal, LOCAL);
  }

}
