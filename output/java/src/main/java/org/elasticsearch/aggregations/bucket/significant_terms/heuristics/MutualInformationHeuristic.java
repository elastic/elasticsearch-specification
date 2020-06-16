
package org.elasticsearch.aggregations.bucket.significant_terms.heuristics;

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


public class MutualInformationHeuristic  implements XContentable<MutualInformationHeuristic> {
  
  static final ParseField BACKGROUND_IS_SUPERSET = new ParseField("background_is_superset");
  private Boolean _backgroundIsSuperset;
  public Boolean getBackgroundIsSuperset() { return this._backgroundIsSuperset; }
  public MutualInformationHeuristic setBackgroundIsSuperset(Boolean val) { this._backgroundIsSuperset = val; return this; }


  static final ParseField INCLUDE_NEGATIVES = new ParseField("include_negatives");
  private Boolean _includeNegatives;
  public Boolean getIncludeNegatives() { return this._includeNegatives; }
  public MutualInformationHeuristic setIncludeNegatives(Boolean val) { this._includeNegatives = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_backgroundIsSuperset != null) {
      builder.field(BACKGROUND_IS_SUPERSET.getPreferredName(), _backgroundIsSuperset);
    }
    if (_includeNegatives != null) {
      builder.field(INCLUDE_NEGATIVES.getPreferredName(), _includeNegatives);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MutualInformationHeuristic fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MutualInformationHeuristic.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MutualInformationHeuristic, Void> PARSER =
    new ObjectParser<>(MutualInformationHeuristic.class.getName(), false, MutualInformationHeuristic::new);

  static {
    PARSER.declareBoolean(MutualInformationHeuristic::setBackgroundIsSuperset, BACKGROUND_IS_SUPERSET);
    PARSER.declareBoolean(MutualInformationHeuristic::setIncludeNegatives, INCLUDE_NEGATIVES);
  }

}
