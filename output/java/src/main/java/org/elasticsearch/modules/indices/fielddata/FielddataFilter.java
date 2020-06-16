
package org.elasticsearch.modules.indices.fielddata;

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
import org.elasticsearch.modules.indices.fielddata.*;

public class FielddataFilter  implements XContentable<FielddataFilter> {
  
  static final ParseField FREQUENCY = new ParseField("frequency");
  private FielddataFrequencyFilter _frequency;
  public FielddataFrequencyFilter getFrequency() { return this._frequency; }
  public FielddataFilter setFrequency(FielddataFrequencyFilter val) { this._frequency = val; return this; }


  static final ParseField REGEX = new ParseField("regex");
  private FielddataRegexFilter _regex;
  public FielddataRegexFilter getRegex() { return this._regex; }
  public FielddataFilter setRegex(FielddataRegexFilter val) { this._regex = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_frequency != null) {
      builder.field(FREQUENCY.getPreferredName());
      _frequency.toXContent(builder, params);
    }
    if (_regex != null) {
      builder.field(REGEX.getPreferredName());
      _regex.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FielddataFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FielddataFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FielddataFilter, Void> PARSER =
    new ObjectParser<>(FielddataFilter.class.getName(), false, FielddataFilter::new);

  static {
    PARSER.declareObject(FielddataFilter::setFrequency, (p, t) -> FielddataFrequencyFilter.PARSER.apply(p, t), FREQUENCY);
    PARSER.declareObject(FielddataFilter::setRegex, (p, t) -> FielddataRegexFilter.PARSER.apply(p, t), REGEX);
  }

}
