
package org.elasticsearch.query_dsl.abstractions.field_name;

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

public class FieldNameQuery  implements XContentable<FieldNameQuery> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public FieldNameQuery setField(String val) { this._field = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
  }

  @Override
  public FieldNameQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldNameQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldNameQuery, Void> PARSER =
    new ObjectParser<>(FieldNameQuery.class.getName(), false, FieldNameQuery::new);

  static {
    PARSER.declareString(FieldNameQuery::setField, FIELD);
  }

}
