
package org.elasticsearch.query_dsl.term_level.ids;

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
import org.elasticsearch.query_dsl.abstractions.query.*;

public class IdsQuery extends QueryBase implements XContentable<IdsQuery> {
  
  static final ParseField VALUES = new ParseField("values");
  private List<Id> _values;
  public List<Id> getValues() { return this._values; }
  public IdsQuery setValues(List<Id> val) { this._values = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_values != null) {
      builder.array(VALUES.getPreferredName(), _values);
    }
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
