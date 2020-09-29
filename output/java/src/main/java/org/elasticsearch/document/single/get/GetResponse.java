
package org.elasticsearch.document.single.get;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.lazy_document.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetResponse<TDocument> extends ResponseBase<GetResponse> implements XContentable<GetResponse> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<String, LazyDocument> _fields;
  public NamedContainer<String, LazyDocument> getFields() { return this._fields; }
  public GetResponse<TDocument> setFields(NamedContainer<String, LazyDocument> val) { this._fields = val; return this; }

  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public GetResponse<TDocument> setFound(Boolean val) { this._found = val; return this; }

  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public GetResponse<TDocument> setId(String val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("_index");
  private String _index;
  public String getIndex() { return this._index; }
  public GetResponse<TDocument> setIndex(String val) { this._index = val; return this; }

  static final ParseField PRIMARY_TERM = new ParseField("_primary_term");
  private long _primaryTerm;
  private boolean _primaryTerm$isSet;
  public long getPrimaryTerm() { return this._primaryTerm; }
  public GetResponse<TDocument> setPrimaryTerm(long val) {
    this._primaryTerm = val;
    _primaryTerm$isSet = true;
    return this;
  }

  static final ParseField ROUTING = new ParseField("_routing");
  private String _routing;
  public String getRouting() { return this._routing; }
  public GetResponse<TDocument> setRouting(String val) { this._routing = val; return this; }

  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private long _seqNo;
  private boolean _seqNo$isSet;
  public long getSeqNo() { return this._seqNo; }
  public GetResponse<TDocument> setSeqNo(long val) {
    this._seqNo = val;
    _seqNo$isSet = true;
    return this;
  }

  static final ParseField SOURCE = new ParseField("_source");
  private TDocument _source;
  public TDocument getSource() { return this._source; }
  public GetResponse<TDocument> setSource(TDocument val) { this._source = val; return this; }

  static final ParseField TYPE = new ParseField("_type");
  private String _type;
  public String getType() { return this._type; }
  public GetResponse<TDocument> setType(String val) { this._type = val; return this; }

  static final ParseField VERSION = new ParseField("_version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public GetResponse<TDocument> setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_primaryTerm$isSet) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName(), _routing);
    }
    if (_seqNo$isSet) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public GetResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetResponse, Void> PARSER =
    new ObjectParser<>(GetResponse.class.getName(), false, GetResponse::new);

  static {
    PARSER.declareObject(GetResponse::setFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> LazyDocument.PARSER.apply(pp, null)), FIELDS);
    PARSER.declareBoolean(GetResponse::setFound, FOUND);
    PARSER.declareString(GetResponse::setId, ID);
    PARSER.declareString(GetResponse::setIndex, INDEX);
    PARSER.declareLong(GetResponse::setPrimaryTerm, PRIMARY_TERM);
    PARSER.declareString(GetResponse::setRouting, ROUTING);
    PARSER.declareLong(GetResponse::setSeqNo, SEQ_NO);
    PARSER.declareObject(GetResponse::setSource, (p, t) -> null /* TODO TDocument */, SOURCE);
    PARSER.declareString(GetResponse::setType, TYPE);
    PARSER.declareLong(GetResponse::setVersion, VERSION);
  }

}
