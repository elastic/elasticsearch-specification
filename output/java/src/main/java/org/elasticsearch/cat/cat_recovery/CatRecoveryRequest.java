
package org.elasticsearch.cat.cat_recovery;

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

public class CatRecoveryRequest extends RequestBase<CatRecoveryRequest> implements XContentable<CatRecoveryRequest> {
  
  static final ParseField ACTIVE_ONLY = new ParseField("active_only");
  private Boolean _activeOnly;
  public Boolean getActiveOnly() { return this._activeOnly; }
  public CatRecoveryRequest setActiveOnly(Boolean val) { this._activeOnly = val; return this; }

  static final ParseField BYTES = new ParseField("bytes");
  private Bytes _bytes;
  public Bytes getBytes() { return this._bytes; }
  public CatRecoveryRequest setBytes(Bytes val) { this._bytes = val; return this; }

  static final ParseField DETAILED = new ParseField("detailed");
  private Boolean _detailed;
  public Boolean getDetailed() { return this._detailed; }
  public CatRecoveryRequest setDetailed(Boolean val) { this._detailed = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public CatRecoveryRequest setFormat(String val) { this._format = val; return this; }

  static final ParseField HEADERS = new ParseField("headers");
  private List<String> _headers;
  public List<String> getHeaders() { return this._headers; }
  public CatRecoveryRequest setHeaders(List<String> val) { this._headers = val; return this; }

  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatRecoveryRequest setHelp(Boolean val) { this._help = val; return this; }

  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public CatRecoveryRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatRecoveryRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }

  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public CatRecoveryRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_activeOnly != null) {
      builder.field(ACTIVE_ONLY.getPreferredName(), _activeOnly);
    }
    if (_bytes != null) {
      builder.field(BYTES.getPreferredName());
      _bytes.toXContent(builder, params);
    }
    if (_detailed != null) {
      builder.field(DETAILED.getPreferredName(), _detailed);
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
  public CatRecoveryRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatRecoveryRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatRecoveryRequest, Void> PARSER =
    new ObjectParser<>(CatRecoveryRequest.class.getName(), false, CatRecoveryRequest::new);

  static {
    PARSER.declareBoolean(CatRecoveryRequest::setActiveOnly, ACTIVE_ONLY);
    PARSER.declareField(CatRecoveryRequest::setBytes, (p, t) -> Bytes.PARSER.apply(p), BYTES, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(CatRecoveryRequest::setDetailed, DETAILED);
    PARSER.declareString(CatRecoveryRequest::setFormat, FORMAT);
    PARSER.declareStringArray(CatRecoveryRequest::setHeaders, HEADERS);
    PARSER.declareBoolean(CatRecoveryRequest::setHelp, HELP);
    PARSER.declareString(CatRecoveryRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareStringArray(CatRecoveryRequest::setSortByColumns, SORT_BY_COLUMNS);
    PARSER.declareBoolean(CatRecoveryRequest::setVerbose, VERBOSE);
  }

}
