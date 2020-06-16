
package org.elasticsearch.document.single.get;

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
import org.elasticsearch.common_abstractions.lazy_document.*;
import org.elasticsearch.internal.*;

public class GetResponse<TDocument>  implements XContentable<GetResponse<TDocument>> {
  
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
  private Long _primaryTerm;
  public Long getPrimaryTerm() { return this._primaryTerm; }
  public GetResponse<TDocument> setPrimaryTerm(Long val) { this._primaryTerm = val; return this; }


  static final ParseField ROUTING = new ParseField("_routing");
  private String _routing;
  public String getRouting() { return this._routing; }
  public GetResponse<TDocument> setRouting(String val) { this._routing = val; return this; }


  static final ParseField SEQ_NO = new ParseField("_seq_no");
  private Long _seqNo;
  public Long getSeqNo() { return this._seqNo; }
  public GetResponse<TDocument> setSeqNo(Long val) { this._seqNo = val; return this; }


  static final ParseField SOURCE = new ParseField("_source");
  private TDocument _source;
  public TDocument getSource() { return this._source; }
  public GetResponse<TDocument> setSource(TDocument val) { this._source = val; return this; }


  static final ParseField TYPE = new ParseField("_type");
  private String _type;
  public String getType() { return this._type; }
  public GetResponse<TDocument> setType(String val) { this._type = val; return this; }


  static final ParseField VERSION = new ParseField("_version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public GetResponse<TDocument> setVersion(Long val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
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
    if (_primaryTerm != null) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName(), _routing);
    }
    if (_seqNo != null) {
      builder.field(SEQ_NO.getPreferredName(), _seqNo);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
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
