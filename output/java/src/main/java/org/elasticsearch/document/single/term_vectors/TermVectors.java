
package org.elasticsearch.document.single.term_vectors;

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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.document.single.term_vectors.*;
import org.elasticsearch.internal.*;

public class TermVectors  implements XContentable<TermVectors> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public TermVectors setFound(Boolean val) { this._found = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public TermVectors setId(String val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public TermVectors setIndex(String val) { this._index = val; return this; }


  static final ParseField TERM_VECTORS = new ParseField("term_vectors");
  private NamedContainer<Field, TermVector> _termVectors;
  public NamedContainer<Field, TermVector> getTermVectors() { return this._termVectors; }
  public TermVectors setTermVectors(NamedContainer<Field, TermVector> val) { this._termVectors = val; return this; }


  static final ParseField TOOK = new ParseField("took");
  private Long _took;
  public Long getTook() { return this._took; }
  public TermVectors setTook(Long val) { this._took = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public TermVectors setVersion(Long val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
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
    if (_took != null) {
      builder.field(TOOK.getPreferredName(), _took);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TermVectors fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermVectors.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermVectors, Void> PARSER =
    new ObjectParser<>(TermVectors.class.getName(), false, TermVectors::new);

  static {
    PARSER.declareBoolean(TermVectors::setFound, FOUND);
    PARSER.declareString(TermVectors::setId, ID);
    PARSER.declareString(TermVectors::setIndex, INDEX);
    PARSER.declareObject(TermVectors::setTermVectors, (p, t) -> new NamedContainer<>(n -> () -> new Field(n),pp -> TermVector.PARSER.apply(pp, null)), TERM_VECTORS);
    PARSER.declareLong(TermVectors::setTook, TOOK);
    PARSER.declareLong(TermVectors::setVersion, VERSION);
  }

}
