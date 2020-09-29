
package org.elasticsearch.cat.cat_nodes;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class CatNodesRequest extends RequestBase<CatNodesRequest> implements XContentable<CatNodesRequest> {
  
  static final ParseField BYTES = new ParseField("bytes");
  private Bytes _bytes;
  public Bytes getBytes() { return this._bytes; }
  public CatNodesRequest setBytes(Bytes val) { this._bytes = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public CatNodesRequest setFormat(String val) { this._format = val; return this; }

  static final ParseField FULL_ID = new ParseField("full_id");
  private Boolean _fullId;
  public Boolean getFullId() { return this._fullId; }
  public CatNodesRequest setFullId(Boolean val) { this._fullId = val; return this; }

  static final ParseField HEADERS = new ParseField("headers");
  private List<String> _headers;
  public List<String> getHeaders() { return this._headers; }
  public CatNodesRequest setHeaders(List<String> val) { this._headers = val; return this; }

  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatNodesRequest setHelp(Boolean val) { this._help = val; return this; }

  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public CatNodesRequest setLocal(Boolean val) { this._local = val; return this; }

  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public CatNodesRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatNodesRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }

  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public CatNodesRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_bytes != null) {
      builder.field(BYTES.getPreferredName());
      _bytes.toXContent(builder, params);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_fullId != null) {
      builder.field(FULL_ID.getPreferredName(), _fullId);
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
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_sortByColumns != null) {
      builder.array(SORT_BY_COLUMNS.getPreferredName(), _sortByColumns);
    }
    if (_verbose != null) {
      builder.field(VERBOSE.getPreferredName(), _verbose);
    }
  }

  @Override
  public CatNodesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatNodesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatNodesRequest, Void> PARSER =
    new ObjectParser<>(CatNodesRequest.class.getName(), false, CatNodesRequest::new);

  static {
    PARSER.declareField(CatNodesRequest::setBytes, (p, t) -> Bytes.PARSER.apply(p), BYTES, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CatNodesRequest::setFormat, FORMAT);
    PARSER.declareBoolean(CatNodesRequest::setFullId, FULL_ID);
    PARSER.declareStringArray(CatNodesRequest::setHeaders, HEADERS);
    PARSER.declareBoolean(CatNodesRequest::setHelp, HELP);
    PARSER.declareBoolean(CatNodesRequest::setLocal, LOCAL);
    PARSER.declareString(CatNodesRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareStringArray(CatNodesRequest::setSortByColumns, SORT_BY_COLUMNS);
    PARSER.declareBoolean(CatNodesRequest::setVerbose, VERBOSE);
  }

}
