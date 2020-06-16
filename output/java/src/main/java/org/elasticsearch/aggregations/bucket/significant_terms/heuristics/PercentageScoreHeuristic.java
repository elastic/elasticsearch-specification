
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


public class PercentageScoreHeuristic  implements XContentable<PercentageScoreHeuristic> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public PercentageScoreHeuristic fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PercentageScoreHeuristic.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PercentageScoreHeuristic, Void> PARSER =
    new ObjectParser<>(PercentageScoreHeuristic.class.getName(), false, PercentageScoreHeuristic::new);

  static {
    
  }

}
