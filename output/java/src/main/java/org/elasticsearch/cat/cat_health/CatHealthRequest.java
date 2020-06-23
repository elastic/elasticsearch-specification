
package org.elasticsearch.cat.cat_health;

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
import org.elasticsearch.common_options.time_unit.*;

public class CatHealthRequest  implements XContentable<CatHealthRequest> {
  
  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public CatHealthRequest setFormat(String val) { this._format = val; return this; }


  static final ParseField HEADERS = new ParseField("headers");
  private List<String> _headers;
  public List<String> getHeaders() { return this._headers; }
  public CatHealthRequest setHeaders(List<String> val) { this._headers = val; return this; }


  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatHealthRequest setHelp(Boolean val) { this._help = val; return this; }


  static final ParseField INCLUDE_TIMESTAMP = new ParseField("include_timestamp");
  private Boolean _includeTimestamp;
  public Boolean getIncludeTimestamp() { return this._includeTimestamp; }
  public CatHealthRequest setIncludeTimestamp(Boolean val) { this._includeTimestamp = val; return this; }


  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public CatHealthRequest setLocal(Boolean val) { this._local = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public CatHealthRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatHealthRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }


  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public CatHealthRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_headers != null) {
      builder.array(HEADERS.getPreferredName(), _headers);
    }
    if (_help != null) {
      builder.field(HELP.getPreferredName(), _help);
    }
    if (_includeTimestamp != null) {
      builder.field(INCLUDE_TIMESTAMP.getPreferredName(), _includeTimestamp);
    }
    if (_local != null) {
      builder.field(LOCAL.getPreferredName(), _local);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_sortByColumns != null) {
      builder.array(SORT_BY_COLUMNS.getPreferredName(), _sortByColumns);
    }
    if (_verbose != null) {
      builder.field(VERBOSE.getPreferredName(), _verbose);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatHealthRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatHealthRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatHealthRequest, Void> PARSER =
    new ObjectParser<>(CatHealthRequest.class.getName(), false, CatHealthRequest::new);

  static {
    PARSER.declareString(CatHealthRequest::setFormat, FORMAT);
    PARSER.declareStringArray(CatHealthRequest::setHeaders, HEADERS);
    PARSER.declareBoolean(CatHealthRequest::setHelp, HELP);
    PARSER.declareBoolean(CatHealthRequest::setIncludeTimestamp, INCLUDE_TIMESTAMP);
    PARSER.declareBoolean(CatHealthRequest::setLocal, LOCAL);
    PARSER.declareObject(CatHealthRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareStringArray(CatHealthRequest::setSortByColumns, SORT_BY_COLUMNS);
    PARSER.declareBoolean(CatHealthRequest::setVerbose, VERBOSE);
  }

}
