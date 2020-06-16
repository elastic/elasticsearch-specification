
package org.elasticsearch.cat.cat_snapshots;

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

public class CatSnapshotsRequest  implements XContentable<CatSnapshotsRequest> {
  
  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public CatSnapshotsRequest setFormat(String val) { this._format = val; return this; }


  static final ParseField HEADERS = new ParseField("headers");
  private List<String> _headers;
  public List<String> getHeaders() { return this._headers; }
  public CatSnapshotsRequest setHeaders(List<String> val) { this._headers = val; return this; }


  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatSnapshotsRequest setHelp(Boolean val) { this._help = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public CatSnapshotsRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public CatSnapshotsRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatSnapshotsRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }


  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public CatSnapshotsRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
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
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
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
  public CatSnapshotsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatSnapshotsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatSnapshotsRequest, Void> PARSER =
    new ObjectParser<>(CatSnapshotsRequest.class.getName(), false, CatSnapshotsRequest::new);

  static {
    PARSER.declareString(CatSnapshotsRequest::setFormat, FORMAT);
    PARSER.declareStringArray(CatSnapshotsRequest::setHeaders, HEADERS);
    PARSER.declareBoolean(CatSnapshotsRequest::setHelp, HELP);
    PARSER.declareBoolean(CatSnapshotsRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareObject(CatSnapshotsRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareStringArray(CatSnapshotsRequest::setSortByColumns, SORT_BY_COLUMNS);
    PARSER.declareBoolean(CatSnapshotsRequest::setVerbose, VERBOSE);
  }

}
