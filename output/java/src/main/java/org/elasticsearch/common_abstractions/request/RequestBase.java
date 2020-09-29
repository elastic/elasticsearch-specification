
package org.elasticsearch.common_abstractions.request;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public abstract class RequestBase<T extends RequestBase<T>>  implements XContentable<T> {
  
  static final ParseField ERROR_TRACE = new ParseField("error_trace");
  private Boolean _errorTrace;
  private boolean _errorTrace$isSet;
  public Boolean getErrorTrace() { return this._errorTrace; }
  @SuppressWarnings("unchecked")
  public T setErrorTrace(Boolean val) {
    this._errorTrace = val;
    _errorTrace$isSet = true;
    return (T)this;
  }

  static final ParseField FILTER_PATH = new ParseField("filter_path");
  private Union2<String, List<String>> _filterPath;
  private boolean _filterPath$isSet;
  public Union2<String, List<String>> getFilterPath() { return this._filterPath; }
  @SuppressWarnings("unchecked")
  public T setFilterPath(Union2<String, List<String>> val) {
    this._filterPath = val;
    _filterPath$isSet = true;
    return (T)this;
  }

  static final ParseField HUMAN = new ParseField("human");
  private Boolean _human;
  private boolean _human$isSet;
  public Boolean getHuman() { return this._human; }
  @SuppressWarnings("unchecked")
  public T setHuman(Boolean val) {
    this._human = val;
    _human$isSet = true;
    return (T)this;
  }

  static final ParseField PRETTY = new ParseField("pretty");
  private Boolean _pretty;
  private boolean _pretty$isSet;
  public Boolean getPretty() { return this._pretty; }
  @SuppressWarnings("unchecked")
  public T setPretty(Boolean val) {
    this._pretty = val;
    _pretty$isSet = true;
    return (T)this;
  }

  static final ParseField SOURCE_QUERY_STRING = new ParseField("source_query_string");
  private String _sourceQueryString;
  private boolean _sourceQueryString$isSet;
  public String getSourceQueryString() { return this._sourceQueryString; }
  @SuppressWarnings("unchecked")
  public T setSourceQueryString(String val) {
    this._sourceQueryString = val;
    _sourceQueryString$isSet = true;
    return (T)this;
  }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    toXContentInternal(builder, params);
    builder.endObject();
    return builder;
  }

  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    if (_errorTrace != null) {
      builder.field(ERROR_TRACE.getPreferredName(), _errorTrace);
    }
    if (_filterPath != null) {
      builder.field(FILTER_PATH.getPreferredName());
      _filterPath.toXContent(builder, params);
    }
    if (_human != null) {
      builder.field(HUMAN.getPreferredName(), _human);
    }
    if (_pretty != null) {
      builder.field(PRETTY.getPreferredName(), _pretty);
    }
    if (_sourceQueryString != null) {
      builder.field(SOURCE_QUERY_STRING.getPreferredName(), _sourceQueryString);
    }
  }

}
