
package org.elasticsearch.internal;

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


public class PlainRequestBase<TParameters>  implements XContentable<PlainRequestBase<TParameters>> {
  
  static final ParseField ERROR_TRACE = new ParseField("error_trace");
  private Boolean _errorTrace;
  public Boolean getErrorTrace() { return this._errorTrace; }
  public PlainRequestBase<TParameters> setErrorTrace(Boolean val) { this._errorTrace = val; return this; }


  static final ParseField FILTER_PATH = new ParseField("filter_path");
  private List<String> _filterPath;
  public List<String> getFilterPath() { return this._filterPath; }
  public PlainRequestBase<TParameters> setFilterPath(List<String> val) { this._filterPath = val; return this; }


  static final ParseField HUMAN = new ParseField("human");
  private Boolean _human;
  public Boolean getHuman() { return this._human; }
  public PlainRequestBase<TParameters> setHuman(Boolean val) { this._human = val; return this; }


  static final ParseField PRETTY = new ParseField("pretty");
  private Boolean _pretty;
  public Boolean getPretty() { return this._pretty; }
  public PlainRequestBase<TParameters> setPretty(Boolean val) { this._pretty = val; return this; }


  static final ParseField SOURCE_QUERY_STRING = new ParseField("source_query_string");
  private String _sourceQueryString;
  public String getSourceQueryString() { return this._sourceQueryString; }
  public PlainRequestBase<TParameters> setSourceQueryString(String val) { this._sourceQueryString = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_errorTrace != null) {
      builder.field(ERROR_TRACE.getPreferredName(), _errorTrace);
    }
    if (_filterPath != null) {
      builder.array(FILTER_PATH.getPreferredName(), _filterPath);
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
    builder.endObject();
    return builder;
  }

  @Override
  public PlainRequestBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PlainRequestBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PlainRequestBase, Void> PARSER =
    new ObjectParser<>(PlainRequestBase.class.getName(), false, PlainRequestBase::new);

  static {
    PARSER.declareBoolean(PlainRequestBase::setErrorTrace, ERROR_TRACE);
    PARSER.declareStringArray(PlainRequestBase::setFilterPath, FILTER_PATH);
    PARSER.declareBoolean(PlainRequestBase::setHuman, HUMAN);
    PARSER.declareBoolean(PlainRequestBase::setPretty, PRETTY);
    PARSER.declareString(PlainRequestBase::setSourceQueryString, SOURCE_QUERY_STRING);
  }

}
