
package org.elasticsearch.cat.cat_trained_models;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.request.*;

public class CatTrainedModelsRequest extends RequestBase<CatTrainedModelsRequest> implements XContentable<CatTrainedModelsRequest> {
  
  static final ParseField ALLOW_NO_MATCH = new ParseField("allow_no_match");
  private Boolean _allowNoMatch;
  public Boolean getAllowNoMatch() { return this._allowNoMatch; }
  public CatTrainedModelsRequest setAllowNoMatch(Boolean val) { this._allowNoMatch = val; return this; }

  static final ParseField BYTES = new ParseField("bytes");
  private Bytes _bytes;
  public Bytes getBytes() { return this._bytes; }
  public CatTrainedModelsRequest setBytes(Bytes val) { this._bytes = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public CatTrainedModelsRequest setFormat(String val) { this._format = val; return this; }

  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public CatTrainedModelsRequest setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField HEADERS = new ParseField("headers");
  private List<String> _headers;
  public List<String> getHeaders() { return this._headers; }
  public CatTrainedModelsRequest setHeaders(List<String> val) { this._headers = val; return this; }

  static final ParseField HELP = new ParseField("help");
  private Boolean _help;
  public Boolean getHelp() { return this._help; }
  public CatTrainedModelsRequest setHelp(Boolean val) { this._help = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public CatTrainedModelsRequest setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField SORT_BY_COLUMNS = new ParseField("sort_by_columns");
  private List<String> _sortByColumns;
  public List<String> getSortByColumns() { return this._sortByColumns; }
  public CatTrainedModelsRequest setSortByColumns(List<String> val) { this._sortByColumns = val; return this; }

  static final ParseField VERBOSE = new ParseField("verbose");
  private Boolean _verbose;
  public Boolean getVerbose() { return this._verbose; }
  public CatTrainedModelsRequest setVerbose(Boolean val) { this._verbose = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
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
  public CatTrainedModelsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTrainedModelsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTrainedModelsRequest, Void> PARSER =
    new ObjectParser<>(CatTrainedModelsRequest.class.getName(), false, CatTrainedModelsRequest::new);

  static {
    PARSER.declareBoolean(CatTrainedModelsRequest::setAllowNoMatch, ALLOW_NO_MATCH);
    PARSER.declareField(CatTrainedModelsRequest::setBytes, (p, t) -> Bytes.PARSER.apply(p), BYTES, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CatTrainedModelsRequest::setFormat, FORMAT);
    PARSER.declareInt(CatTrainedModelsRequest::setFrom, FROM);
    PARSER.declareStringArray(CatTrainedModelsRequest::setHeaders, HEADERS);
    PARSER.declareBoolean(CatTrainedModelsRequest::setHelp, HELP);
    PARSER.declareInt(CatTrainedModelsRequest::setSize, SIZE);
    PARSER.declareStringArray(CatTrainedModelsRequest::setSortByColumns, SORT_BY_COLUMNS);
    PARSER.declareBoolean(CatTrainedModelsRequest::setVerbose, VERBOSE);
  }

}
