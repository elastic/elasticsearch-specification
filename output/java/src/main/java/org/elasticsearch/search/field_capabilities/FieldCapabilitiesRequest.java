
package org.elasticsearch.search.field_capabilities;

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
import org.elasticsearch.common_abstractions.infer.field.*;

public class FieldCapabilitiesRequest  implements XContentable<FieldCapabilitiesRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public FieldCapabilitiesRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public FieldCapabilitiesRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private List<Field> _fields;
  public List<Field> getFields() { return this._fields; }
  public FieldCapabilitiesRequest setFields(List<Field> val) { this._fields = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public FieldCapabilitiesRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField INCLUDE_UNMAPPED = new ParseField("include_unmapped");
  private Boolean _includeUnmapped;
  public Boolean getIncludeUnmapped() { return this._includeUnmapped; }
  public FieldCapabilitiesRequest setIncludeUnmapped(Boolean val) { this._includeUnmapped = val; return this; }


  
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
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_includeUnmapped != null) {
      builder.field(INCLUDE_UNMAPPED.getPreferredName(), _includeUnmapped);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FieldCapabilitiesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldCapabilitiesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldCapabilitiesRequest, Void> PARSER =
    new ObjectParser<>(FieldCapabilitiesRequest.class.getName(), false, FieldCapabilitiesRequest::new);

  static {
    PARSER.declareBoolean(FieldCapabilitiesRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(FieldCapabilitiesRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObjectArray(FieldCapabilitiesRequest::setFields, (p, t) -> Field.createFrom(p), FIELDS);
    PARSER.declareBoolean(FieldCapabilitiesRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(FieldCapabilitiesRequest::setIncludeUnmapped, INCLUDE_UNMAPPED);
  }

}
