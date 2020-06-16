
package org.elasticsearch.cat.cat_aliases;

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
import org.elasticsearch.common_options.time_unit.*;

public class CatAliasesRequest  implements XContentable<CatAliasesRequest> {
  
  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public CatAliasesRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public CatAliasesRequest setFormat(String val) { this._format = val; return this; }


  static final ParseField HEADERS = new ParseField("headers");
  private List<String> _headers;
  public List<String> getHeaders() { return this._headers; }
  public CatAliasesRequest setHeaders(List<String> val) { this._headers = val; return this; }


  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatAliasesRequest setHelp(Boolean val) { this._help = val; return this; }


  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public CatAliasesRequest setLocal(Boolean val) { this._local = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public CatAliasesRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatAliasesRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }


  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public CatAliasesRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_headers != null) {
      builder.array(HEADERS.getPreferredName(), _headers);
    }
    if (_help != null) {
      builder.field(HELP.getPreferredName(), _help);
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
  public CatAliasesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatAliasesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatAliasesRequest, Void> PARSER =
    new ObjectParser<>(CatAliasesRequest.class.getName(), false, CatAliasesRequest::new);

  static {
    PARSER.declareField(CatAliasesRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CatAliasesRequest::setFormat, FORMAT);
    PARSER.declareStringArray(CatAliasesRequest::setHeaders, HEADERS);
    PARSER.declareBoolean(CatAliasesRequest::setHelp, HELP);
    PARSER.declareBoolean(CatAliasesRequest::setLocal, LOCAL);
    PARSER.declareObject(CatAliasesRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareStringArray(CatAliasesRequest::setSortByColumns, SORT_BY_COLUMNS);
    PARSER.declareBoolean(CatAliasesRequest::setVerbose, VERBOSE);
  }

}
