
package org.elasticsearch.mapping.types.specialized.field_alias;

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
import org.elasticsearch.mapping.types.*;

public class FieldAliasProperty extends PropertyBase implements XContentable<FieldAliasProperty> {
  
  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public FieldAliasProperty setPath(String val) { this._path = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
  }

  @Override
  public FieldAliasProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldAliasProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldAliasProperty, Void> PARSER =
    new ObjectParser<>(FieldAliasProperty.class.getName(), false, FieldAliasProperty::new);

  static {
    PARSER.declareString(FieldAliasProperty::setPath, PATH);
  }

}
