
package org.elasticsearch.mapping.types.specialized.completion;

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

public class SuggestContext  implements XContentable<SuggestContext> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public SuggestContext setName(String val) { this._name = val; return this; }


  static final ParseField PATH = new ParseField("path");
  private Field _path;
  public Field getPath() { return this._path; }
  public SuggestContext setPath(Field val) { this._path = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public SuggestContext setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_path != null) {
      builder.field(PATH.getPreferredName());
      _path.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SuggestContext fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SuggestContext.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SuggestContext, Void> PARSER =
    new ObjectParser<>(SuggestContext.class.getName(), false, SuggestContext::new);

  static {
    PARSER.declareString(SuggestContext::setName, NAME);
    PARSER.declareObject(SuggestContext::setPath, (p, t) -> Field.createFrom(p), PATH);
    PARSER.declareString(SuggestContext::setType, TYPE);
  }

}
