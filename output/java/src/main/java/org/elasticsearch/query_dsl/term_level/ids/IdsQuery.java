
package org.elasticsearch.query_dsl.term_level.ids;

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
import org.elasticsearch.common_abstractions.infer.id.*;

public class IdsQuery  implements XContentable<IdsQuery> {
  
  static final ParseField VALUES = new ParseField("values");
  private List<Id> _values;
  public List<Id> getValues() { return this._values; }
  public IdsQuery setValues(List<Id> val) { this._values = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_values != null) {
      builder.array(VALUES.getPreferredName(), _values);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IdsQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IdsQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IdsQuery, Void> PARSER =
    new ObjectParser<>(IdsQuery.class.getName(), false, IdsQuery::new);

  static {
    PARSER.declareObjectArray(IdsQuery::setValues, (p, t) -> Id.createFrom(p), VALUES);
  }

}
