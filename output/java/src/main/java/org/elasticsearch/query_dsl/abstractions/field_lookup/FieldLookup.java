
package org.elasticsearch.query_dsl.abstractions.field_lookup;

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

public class FieldLookup  implements XContentable<FieldLookup> {
  
  static final ParseField ID = new ParseField("id");
  private Id _id;
  public Id getId() { return this._id; }
  public FieldLookup setId(Id val) { this._id = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public FieldLookup setIndex(String val) { this._index = val; return this; }

  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public FieldLookup setPath(String val) { this._path = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public FieldLookup setRouting(Routing val) { this._routing = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
  }

  @Override
  public FieldLookup fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldLookup.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldLookup, Void> PARSER =
    new ObjectParser<>(FieldLookup.class.getName(), false, FieldLookup::new);

  static {
    PARSER.declareObject(FieldLookup::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareString(FieldLookup::setIndex, INDEX);
    PARSER.declareString(FieldLookup::setPath, PATH);
    PARSER.declareObject(FieldLookup::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
  }

}
