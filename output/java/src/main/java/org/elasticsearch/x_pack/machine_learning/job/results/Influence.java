
package org.elasticsearch.x_pack.machine_learning.job.results;

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


public class Influence  implements XContentable<Influence> {
  
  static final ParseField INFLUENCER_FIELD_NAME = new ParseField("influencer_field_name");
  private String _influencerFieldName;
  public String getInfluencerFieldName() { return this._influencerFieldName; }
  public Influence setInfluencerFieldName(String val) { this._influencerFieldName = val; return this; }


  static final ParseField INFLUENCER_FIELD_VALUES = new ParseField("influencer_field_values");
  private List<String> _influencerFieldValues;
  public List<String> getInfluencerFieldValues() { return this._influencerFieldValues; }
  public Influence setInfluencerFieldValues(List<String> val) { this._influencerFieldValues = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_influencerFieldName != null) {
      builder.field(INFLUENCER_FIELD_NAME.getPreferredName(), _influencerFieldName);
    }
    if (_influencerFieldValues != null) {
      builder.array(INFLUENCER_FIELD_VALUES.getPreferredName(), _influencerFieldValues);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Influence fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Influence.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Influence, Void> PARSER =
    new ObjectParser<>(Influence.class.getName(), false, Influence::new);

  static {
    PARSER.declareString(Influence::setInfluencerFieldName, INFLUENCER_FIELD_NAME);
    PARSER.declareStringArray(Influence::setInfluencerFieldValues, INFLUENCER_FIELD_VALUES);
  }

}
