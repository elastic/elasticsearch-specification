
package org.elasticsearch.mapping.types.core;

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


public class RankFeatureProperty  implements XContentable<RankFeatureProperty> {
  
  static final ParseField POSITIVE_SCORE_IMPACT = new ParseField("positive_score_impact");
  private Boolean _positiveScoreImpact;
  public Boolean getPositiveScoreImpact() { return this._positiveScoreImpact; }
  public RankFeatureProperty setPositiveScoreImpact(Boolean val) { this._positiveScoreImpact = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_positiveScoreImpact != null) {
      builder.field(POSITIVE_SCORE_IMPACT.getPreferredName(), _positiveScoreImpact);
    }
    builder.endObject();
    return builder;
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
