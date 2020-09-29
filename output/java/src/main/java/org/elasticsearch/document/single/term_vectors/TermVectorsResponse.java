
package org.elasticsearch.document.single.term_vectors;

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
import org.elasticsearch.document.single.term_vectors.*;
import org.elasticsearch.common_abstractions.response.*;

public class TermVectorsResponse extends ResponseBase<TermVectorsResponse> implements XContentable<TermVectorsResponse> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public TermVectorsResponse setFound(Boolean val) { this._found = val; return this; }

  static final ParseField ID = new ParseField("_id");
  private String _id;
  public String getId() { return this._id; }
  public TermVectorsResponse setId(String val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("_index");
  private String _index;
  public String getIndex() { return this._index; }
  public TermVectorsResponse setIndex(String val) { this._index = val; return this; }

  static final ParseField TERM_VECTORS = new ParseField("term_vectors");
  private NamedContainer<String, TermVector> _termVectors;
  public NamedContainer<String, TermVector> getTermVectors() { return this._termVectors; }
  public TermVectorsResponse setTermVectors(NamedContainer<String, TermVector> val) { this._termVectors = val; return this; }

  static final ParseField TOOK = new ParseField("took");
  private long _took;
  private boolean _took$isSet;
  public long getTook() { return this._took; }
  public TermVectorsResponse setTook(long val) {
    this._took = val;
    _took$isSet = true;
    return this;
  }

  static final ParseField TYPE = new ParseField("_type");
  private String _type;
  public String getType() { return this._type; }
  public TermVectorsResponse setType(String val) { this._type = val; return this; }

  static final ParseField VERSION = new ParseField("_version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public TermVectorsResponse setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_termVectors != null) {
      builder.field(TERM_VECTORS.getPreferredName());
      _termVectors.toXContent(builder, params);
    }
    if (_took$isSet) {
      builder.field(TOOK.getPreferredName(), _took);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public TermVectorsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermVectorsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermVectorsResponse, Void> PARSER =
    new ObjectParser<>(TermVectorsResponse.class.getName(), false, TermVectorsResponse::new);

  static {
    PARSER.declareBoolean(TermVectorsResponse::setFound, FOUND);
    PARSER.declareString(TermVectorsResponse::setId, ID);
    PARSER.declareString(TermVectorsResponse::setIndex, INDEX);
    PARSER.declareObject(TermVectorsResponse::setTermVectors, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> TermVector.PARSER.apply(pp, null)), TERM_VECTORS);
    PARSER.declareLong(TermVectorsResponse::setTook, TOOK);
    PARSER.declareString(TermVectorsResponse::setType, TYPE);
    PARSER.declareLong(TermVectorsResponse::setVersion, VERSION);
  }

}
