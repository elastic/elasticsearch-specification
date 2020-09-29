
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

public class TermVectorsResult  implements XContentable<TermVectorsResult> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public TermVectorsResult setFound(Boolean val) { this._found = val; return this; }

  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public TermVectorsResult setId(String val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public TermVectorsResult setIndex(String val) { this._index = val; return this; }

  static final ParseField TERM_VECTORS = new ParseField("term_vectors");
  private NamedContainer<String, TermVector> _termVectors;
  public NamedContainer<String, TermVector> getTermVectors() { return this._termVectors; }
  public TermVectorsResult setTermVectors(NamedContainer<String, TermVector> val) { this._termVectors = val; return this; }

  static final ParseField TOOK = new ParseField("took");
  private long _took;
  private boolean _took$isSet;
  public long getTook() { return this._took; }
  public TermVectorsResult setTook(long val) {
    this._took = val;
    _took$isSet = true;
    return this;
  }

  static final ParseField VERSION = new ParseField("version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public TermVectorsResult setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
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
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public TermVectorsResult fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermVectorsResult.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermVectorsResult, Void> PARSER =
    new ObjectParser<>(TermVectorsResult.class.getName(), false, TermVectorsResult::new);

  static {
    PARSER.declareBoolean(TermVectorsResult::setFound, FOUND);
    PARSER.declareString(TermVectorsResult::setId, ID);
    PARSER.declareString(TermVectorsResult::setIndex, INDEX);
    PARSER.declareObject(TermVectorsResult::setTermVectors, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> TermVector.PARSER.apply(pp, null)), TERM_VECTORS);
    PARSER.declareLong(TermVectorsResult::setTook, TOOK);
    PARSER.declareLong(TermVectorsResult::setVersion, VERSION);
  }

}
