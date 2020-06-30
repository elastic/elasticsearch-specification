
package org.elasticsearch.document.multiple.multi_get.response;

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
import org.elasticsearch.internal.*;

public class MultiGetHit<TDocument>  implements XContentable<MultiGetHit<TDocument>> {
  
  static final ParseField ERROR = new ParseField("error");
  private MainError _error;
  public MainError getError() { return this._error; }
  public MultiGetHit<TDocument> setError(MainError val) { this._error = val; return this; }


  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public MultiGetHit<TDocument> setFound(Boolean val) { this._found = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public MultiGetHit<TDocument> setId(String val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public MultiGetHit<TDocument> setIndex(String val) { this._index = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private String _routing;
  public String getRouting() { return this._routing; }
  public MultiGetHit<TDocument> setRouting(String val) { this._routing = val; return this; }


  static final ParseField SOURCE = new ParseField("source");
  private TDocument _source;
  public TDocument getSource() { return this._source; }
  public MultiGetHit<TDocument> setSource(TDocument val) { this._source = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public MultiGetHit<TDocument> setType(String val) { this._type = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public MultiGetHit<TDocument> setVersion(Long val) { this._version = val; return this; }


  static final ParseField SEQUENCE_NUMBER = new ParseField("sequence_number");
  private Long _sequenceNumber;
  public Long getSequenceNumber() { return this._sequenceNumber; }
  public MultiGetHit<TDocument> setSequenceNumber(Long val) { this._sequenceNumber = val; return this; }


  static final ParseField PRIMARY_TERM = new ParseField("primary_term");
  private Long _primaryTerm;
  public Long getPrimaryTerm() { return this._primaryTerm; }
  public MultiGetHit<TDocument> setPrimaryTerm(Long val) { this._primaryTerm = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_error != null) {
      builder.field(ERROR.getPreferredName());
      _error.toXContent(builder, params);
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
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName(), _routing);
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
    if (_sequenceNumber != null) {
      builder.field(SEQUENCE_NUMBER.getPreferredName(), _sequenceNumber);
    }
    if (_primaryTerm != null) {
      builder.field(PRIMARY_TERM.getPreferredName(), _primaryTerm);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MultiGetHit fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiGetHit.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiGetHit, Void> PARSER =
    new ObjectParser<>(MultiGetHit.class.getName(), false, MultiGetHit::new);

  static {
    PARSER.declareObject(MultiGetHit::setError, (p, t) -> MainError.PARSER.apply(p, t), ERROR);
    PARSER.declareBoolean(MultiGetHit::setFound, FOUND);
    PARSER.declareString(MultiGetHit::setId, ID);
    PARSER.declareString(MultiGetHit::setIndex, INDEX);
    PARSER.declareString(MultiGetHit::setRouting, ROUTING);
    PARSER.declareObject(MultiGetHit::setSource, (p, t) -> null /* TODO TDocument */, SOURCE);
    PARSER.declareString(MultiGetHit::setType, TYPE);
    PARSER.declareLong(MultiGetHit::setVersion, VERSION);
    PARSER.declareLong(MultiGetHit::setSequenceNumber, SEQUENCE_NUMBER);
    PARSER.declareLong(MultiGetHit::setPrimaryTerm, PRIMARY_TERM);
  }

}
