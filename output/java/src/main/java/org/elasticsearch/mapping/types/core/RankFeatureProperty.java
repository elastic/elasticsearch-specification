
package org.elasticsearch.mapping.types.core;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.mapping.types.*;

public class RankFeatureProperty extends PropertyBase implements XContentable<RankFeatureProperty> {
  
  static final ParseField POSITIVE_SCORE_IMPACT = new ParseField("positive_score_impact");
  private Boolean _positiveScoreImpact;
  public Boolean getPositiveScoreImpact() { return this._positiveScoreImpact; }
  public RankFeatureProperty setPositiveScoreImpact(Boolean val) { this._positiveScoreImpact = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_positiveScoreImpact != null) {
      builder.field(POSITIVE_SCORE_IMPACT.getPreferredName(), _positiveScoreImpact);
    }
  }

  @Override
  public RankFeatureProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RankFeatureProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RankFeatureProperty, Void> PARSER =
    new ObjectParser<>(RankFeatureProperty.class.getName(), false, RankFeatureProperty::new);

  static {
    PARSER.declareBoolean(RankFeatureProperty::setPositiveScoreImpact, POSITIVE_SCORE_IMPACT);
  }

}
