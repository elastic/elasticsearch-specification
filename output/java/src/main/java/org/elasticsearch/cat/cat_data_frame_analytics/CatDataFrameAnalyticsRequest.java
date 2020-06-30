
package org.elasticsearch.cat.cat_data_frame_analytics;

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

public class CatDataFrameAnalyticsRequest  implements XContentable<CatDataFrameAnalyticsRequest> {
  
  static final ParseField ALLOW_NO_MATCH = new ParseField("allow_no_match");
  private Boolean _allowNoMatch;
  public Boolean getAllowNoMatch() { return this._allowNoMatch; }
  public CatDataFrameAnalyticsRequest setAllowNoMatch(Boolean val) { this._allowNoMatch = val; return this; }


  static final ParseField BYTES = new ParseField("bytes");
  private Bytes _bytes;
  public Bytes getBytes() { return this._bytes; }
  public CatDataFrameAnalyticsRequest setBytes(Bytes val) { this._bytes = val; return this; }


  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public CatDataFrameAnalyticsRequest setFormat(String val) { this._format = val; return this; }


  static final ParseField HEADERS = new ParseField("headers");
  private List<String> _headers;
  public List<String> getHeaders() { return this._headers; }
  public CatDataFrameAnalyticsRequest setHeaders(List<String> val) { this._headers = val; return this; }


  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatDataFrameAnalyticsRequest setHelp(Boolean val) { this._help = val; return this; }


  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatDataFrameAnalyticsRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }


  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public CatDataFrameAnalyticsRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoMatch != null) {
      builder.field(ALLOW_NO_MATCH.getPreferredName(), _allowNoMatch);
    }
    if (_bytes != null) {
      builder.field(BYTES.getPreferredName());
      _bytes.toXContent(builder, params);
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
  public CatDataFrameAnalyticsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatDataFrameAnalyticsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatDataFrameAnalyticsRequest, Void> PARSER =
    new ObjectParser<>(CatDataFrameAnalyticsRequest.class.getName(), false, CatDataFrameAnalyticsRequest::new);

  static {
    PARSER.declareBoolean(CatDataFrameAnalyticsRequest::setAllowNoMatch, ALLOW_NO_MATCH);
    PARSER.declareField(CatDataFrameAnalyticsRequest::setBytes, (p, t) -> Bytes.PARSER.apply(p), BYTES, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CatDataFrameAnalyticsRequest::setFormat, FORMAT);
    PARSER.declareStringArray(CatDataFrameAnalyticsRequest::setHeaders, HEADERS);
    PARSER.declareBoolean(CatDataFrameAnalyticsRequest::setHelp, HELP);
    PARSER.declareStringArray(CatDataFrameAnalyticsRequest::setSortByColumns, SORT_BY_COLUMNS);
    PARSER.declareBoolean(CatDataFrameAnalyticsRequest::setVerbose, VERBOSE);
  }

}
