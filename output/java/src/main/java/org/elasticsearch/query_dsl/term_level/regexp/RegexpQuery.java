
package org.elasticsearch.query_dsl.term_level.regexp;

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

public class RegexpQuery extends QueryBase implements XContentable<RegexpQuery> {
  
  static final ParseField FLAGS = new ParseField("flags");
  private String _flags;
  public String getFlags() { return this._flags; }
  public RegexpQuery setFlags(String val) { this._flags = val; return this; }

  static final ParseField MAX_DETERMINIZED_STATES = new ParseField("max_determinized_states");
  private int _maxDeterminizedStates;
  private boolean _maxDeterminizedStates$isSet;
  public int getMaxDeterminizedStates() { return this._maxDeterminizedStates; }
  public RegexpQuery setMaxDeterminizedStates(int val) {
    this._maxDeterminizedStates = val;
    _maxDeterminizedStates$isSet = true;
    return this;
  }

  static final ParseField VALUE = new ParseField("value");
  private String _value;
  public String getValue() { return this._value; }
  public RegexpQuery setValue(String val) { this._value = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_flags != null) {
      builder.field(FLAGS.getPreferredName(), _flags);
    }
    if (_maxDeterminizedStates$isSet) {
      builder.field(MAX_DETERMINIZED_STATES.getPreferredName(), _maxDeterminizedStates);
    }
    if (_value != null) {
      builder.field(VALUE.getPreferredName(), _value);
    }
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
