
package org.elasticsearch.cat.cat_transforms;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.request.*;

public class CatTransformsRequest extends RequestBase<CatTransformsRequest> implements XContentable<CatTransformsRequest> {
  
  static final ParseField ALLOW_NO_MATCH = new ParseField("allow_no_match");
  private Boolean _allowNoMatch;
  public Boolean getAllowNoMatch() { return this._allowNoMatch; }
  public CatTransformsRequest setAllowNoMatch(Boolean val) { this._allowNoMatch = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public CatTransformsRequest setFormat(String val) { this._format = val; return this; }

  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public CatTransformsRequest setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField HEADERS = new ParseField("headers");
  private List<String> _headers;
  public List<String> getHeaders() { return this._headers; }
  public CatTransformsRequest setHeaders(List<String> val) { this._headers = val; return this; }

  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatTransformsRequest setHelp(Boolean val) { this._help = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public CatTransformsRequest setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatTransformsRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }

  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public CatTransformsRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_allowNoMatch != null) {
      builder.field(ALLOW_NO_MATCH.getPreferredName(), _allowNoMatch);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_from$isSet) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_headers != null) {
      builder.array(HEADERS.getPreferredName(), _headers);
    }
    if (_help != null) {
      builder.field(HELP.getPreferredName(), _help);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sortByColumns != null) {
      builder.array(SORT_BY_COLUMNS.getPreferredName(), _sortByColumns);
    }
    if (_verbose != null) {
      builder.field(VERBOSE.getPreferredName(), _verbose);
    }
  }

  @Override
  public CatTransformsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTransformsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTransformsRequest, Void> PARSER =
    new ObjectParser<>(CatTransformsRequest.class.getName(), false, CatTransformsRequest::new);

  static {
    PARSER.declareBoolean(CatTransformsRequest::setAllowNoMatch, ALLOW_NO_MATCH);
    PARSER.declareString(CatTransformsRequest::setFormat, FORMAT);
    PARSER.declareInt(CatTransformsRequest::setFrom, FROM);
    PARSER.declareStringArray(CatTransformsRequest::setHeaders, HEADERS);
    PARSER.declareBoolean(CatTransformsRequest::setHelp, HELP);
    PARSER.declareInt(CatTransformsRequest::setSize, SIZE);
    PARSER.declareStringArray(CatTransformsRequest::setSortByColumns, SORT_BY_COLUMNS);
    PARSER.declareBoolean(CatTransformsRequest::setVerbose, VERBOSE);
  }

}
