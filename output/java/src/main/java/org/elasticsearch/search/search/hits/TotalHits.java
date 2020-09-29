
package org.elasticsearch.search.search.hits;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.search.search.hits.*;
import org.elasticsearch.internal.*;

public class TotalHits  implements XContentable<TotalHits> {
  
  static final ParseField RELATION = new ParseField("relation");
  private TotalHitsRelation _relation;
  public TotalHitsRelation getRelation() { return this._relation; }
  public TotalHits setRelation(TotalHitsRelation val) { this._relation = val; return this; }

  static final ParseField VALUE = new ParseField("value");
  private long _value;
  private boolean _value$isSet;
  public long getValue() { return this._value; }
  public TotalHits setValue(long val) {
    this._value = val;
    _value$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_relation != null) {
      builder.field(RELATION.getPreferredName());
      _relation.toXContent(builder, params);
    }
    if (_value$isSet) {
      builder.field(VALUE.getPreferredName(), _value);
    }
  }

  @Override
  public TotalHits fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TotalHits.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TotalHits, Void> PARSER =
    new ObjectParser<>(TotalHits.class.getName(), false, TotalHits::new);

  static {
    PARSER.declareField(TotalHits::setRelation, (p, t) -> TotalHitsRelation.PARSER.apply(p), RELATION, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(TotalHits::setValue, VALUE);
  }

}
