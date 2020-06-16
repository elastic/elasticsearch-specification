
package org.elasticsearch.indices.status_management.clear_cache;

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

public class ClearCacheRequest  implements XContentable<ClearCacheRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public ClearCacheRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public ClearCacheRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField FIELDDATA = new ParseField("fielddata");
  private Boolean _fielddata;
  public Boolean getFielddata() { return this._fielddata; }
  public ClearCacheRequest setFielddata(Boolean val) { this._fielddata = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private List<Field> _fields;
  public List<Field> getFields() { return this._fields; }
  public ClearCacheRequest setFields(List<Field> val) { this._fields = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public ClearCacheRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private Boolean _query;
  public Boolean getQuery() { return this._query; }
  public ClearCacheRequest setQuery(Boolean val) { this._query = val; return this; }


  static final ParseField REQUEST = new ParseField("request");
  private Boolean _request;
  public Boolean getRequest() { return this._request; }
  public ClearCacheRequest setRequest(Boolean val) { this._request = val; return this; }


  
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
    if (_fielddata != null) {
      builder.field(FIELDDATA.getPreferredName(), _fielddata);
    }
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    if (_request != null) {
      builder.field(REQUEST.getPreferredName(), _request);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClearCacheRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClearCacheRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClearCacheRequest, Void> PARSER =
    new ObjectParser<>(ClearCacheRequest.class.getName(), false, ClearCacheRequest::new);

  static {
    PARSER.declareBoolean(ClearCacheRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(ClearCacheRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(ClearCacheRequest::setFielddata, FIELDDATA);
    PARSER.declareObjectArray(ClearCacheRequest::setFields, (p, t) -> Field.createFrom(p), FIELDS);
    PARSER.declareBoolean(ClearCacheRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(ClearCacheRequest::setQuery, QUERY);
    PARSER.declareBoolean(ClearCacheRequest::setRequest, REQUEST);
  }

}
