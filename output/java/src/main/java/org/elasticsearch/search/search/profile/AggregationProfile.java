
package org.elasticsearch.search.search.profile;

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
import org.elasticsearch.search.search.profile.*;
import org.elasticsearch.internal.*;

public class AggregationProfile  implements XContentable<AggregationProfile> {
  
  static final ParseField BREAKDOWN = new ParseField("breakdown");
  private AggregationBreakdown _breakdown;
  public AggregationBreakdown getBreakdown() { return this._breakdown; }
  public AggregationProfile setBreakdown(AggregationBreakdown val) { this._breakdown = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public AggregationProfile setDescription(String val) { this._description = val; return this; }


  static final ParseField TIME_IN_NANOS = new ParseField("time_in_nanos");
  private Long _timeInNanos;
  public Long getTimeInNanos() { return this._timeInNanos; }
  public AggregationProfile setTimeInNanos(Long val) { this._timeInNanos = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public AggregationProfile setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_breakdown != null) {
      builder.field(BREAKDOWN.getPreferredName());
      _breakdown.toXContent(builder, params);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_timeInNanos != null) {
      builder.field(TIME_IN_NANOS.getPreferredName(), _timeInNanos);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AggregationProfile fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AggregationProfile.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AggregationProfile, Void> PARSER =
    new ObjectParser<>(AggregationProfile.class.getName(), false, AggregationProfile::new);

  static {
    PARSER.declareObject(AggregationProfile::setBreakdown, (p, t) -> AggregationBreakdown.PARSER.apply(p, t), BREAKDOWN);
    PARSER.declareString(AggregationProfile::setDescription, DESCRIPTION);
    PARSER.declareLong(AggregationProfile::setTimeInNanos, TIME_IN_NANOS);
    PARSER.declareString(AggregationProfile::setType, TYPE);
  }

}
