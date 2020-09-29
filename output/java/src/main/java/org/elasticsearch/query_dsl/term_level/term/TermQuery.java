
package org.elasticsearch.query_dsl.term_level.term;

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

public class TermQuery extends QueryBase implements XContentable<TermQuery> {
  
  static final ParseField VALUE = new ParseField("value");
  private Union3<String, Float, Boolean> _value;
  public Union3<String, Float, Boolean> getValue() { return this._value; }
  public TermQuery setValue(Union3<String, Float, Boolean> val) { this._value = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_value != null) {
      builder.field(VALUE.getPreferredName());
      _value.toXContent(builder, params);
    }
  }

  @Override
  public TermQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermQuery, Void> PARSER =
    new ObjectParser<>(TermQuery.class.getName(), false, TermQuery::new);

  static {
    PARSER.declareObject(TermQuery::setValue, (p, t) ->  new Union3<String, Float, Boolean>(), VALUE);
  }

}
