
package org.elasticsearch.query_dsl.term_level.regexp;

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
import org.elasticsearch.internal.*;

public class RegexpQuery  implements XContentable<RegexpQuery> {
  
  static final ParseField FLAGS = new ParseField("flags");
  private String _flags;
  public String getFlags() { return this._flags; }
  public RegexpQuery setFlags(String val) { this._flags = val; return this; }


  static final ParseField MAX_DETERMINIZED_STATES = new ParseField("max_determinized_states");
  private Integer _maxDeterminizedStates;
  public Integer getMaxDeterminizedStates() { return this._maxDeterminizedStates; }
  public RegexpQuery setMaxDeterminizedStates(Integer val) { this._maxDeterminizedStates = val; return this; }


  static final ParseField VALUE = new ParseField("value");
  private String _value;
  public String getValue() { return this._value; }
  public RegexpQuery setValue(String val) { this._value = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_flags != null) {
      builder.field(FLAGS.getPreferredName(), _flags);
    }
    if (_maxDeterminizedStates != null) {
      builder.field(MAX_DETERMINIZED_STATES.getPreferredName(), _maxDeterminizedStates);
    }
    if (_value != null) {
      builder.field(VALUE.getPreferredName(), _value);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RegexpQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RegexpQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RegexpQuery, Void> PARSER =
    new ObjectParser<>(RegexpQuery.class.getName(), false, RegexpQuery::new);

  static {
    PARSER.declareString(RegexpQuery::setFlags, FLAGS);
    PARSER.declareInt(RegexpQuery::setMaxDeterminizedStates, MAX_DETERMINIZED_STATES);
    PARSER.declareString(RegexpQuery::setValue, VALUE);
  }

}
