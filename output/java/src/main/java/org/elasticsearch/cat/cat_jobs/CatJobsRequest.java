
package org.elasticsearch.cat.cat_jobs;

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

public class CatJobsRequest  implements XContentable<CatJobsRequest> {
  
  static final ParseField ALLOW_NO_JOBS = new ParseField("allow_no_jobs");
  private Boolean _allowNoJobs;
  public Boolean getAllowNoJobs() { return this._allowNoJobs; }
  public CatJobsRequest setAllowNoJobs(Boolean val) { this._allowNoJobs = val; return this; }


  static final ParseField BYTES = new ParseField("bytes");
  private Bytes _bytes;
  public Bytes getBytes() { return this._bytes; }
  public CatJobsRequest setBytes(Bytes val) { this._bytes = val; return this; }


  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public CatJobsRequest setFormat(String val) { this._format = val; return this; }


  static final ParseField HEADERS = new ParseField("headers");
  private List<String> _headers;
  public List<String> getHeaders() { return this._headers; }
  public CatJobsRequest setHeaders(List<String> val) { this._headers = val; return this; }


  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatJobsRequest setHelp(Boolean val) { this._help = val; return this; }


  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatJobsRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }


  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public CatJobsRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoJobs != null) {
      builder.field(ALLOW_NO_JOBS.getPreferredName(), _allowNoJobs);
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
  public CatJobsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatJobsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatJobsRequest, Void> PARSER =
    new ObjectParser<>(CatJobsRequest.class.getName(), false, CatJobsRequest::new);

  static {
    PARSER.declareBoolean(CatJobsRequest::setAllowNoJobs, ALLOW_NO_JOBS);
    PARSER.declareField(CatJobsRequest::setBytes, (p, t) -> Bytes.PARSER.apply(p), BYTES, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CatJobsRequest::setFormat, FORMAT);
    PARSER.declareStringArray(CatJobsRequest::setHeaders, HEADERS);
    PARSER.declareBoolean(CatJobsRequest::setHelp, HELP);
    PARSER.declareStringArray(CatJobsRequest::setSortByColumns, SORT_BY_COLUMNS);
    PARSER.declareBoolean(CatJobsRequest::setVerbose, VERBOSE);
  }

}
