
package org.elasticsearch.query_dsl.specialized.rank_feature;

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
import org.elasticsearch.query_dsl.specialized.rank_feature.*;

public class RankFeatureQuery  implements XContentable<RankFeatureQuery> {
  
  static final ParseField FUNCTION = new ParseField("function");
  private RankFeatureFunction _function;
  public RankFeatureFunction getFunction() { return this._function; }
  public RankFeatureQuery setFunction(RankFeatureFunction val) { this._function = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_function != null) {
      builder.field(FUNCTION.getPreferredName());
      _function.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RankFeatureQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RankFeatureQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RankFeatureQuery, Void> PARSER =
    new ObjectParser<>(RankFeatureQuery.class.getName(), false, RankFeatureQuery::new);

  static {
    PARSER.declareObject(RankFeatureQuery::setFunction, (p, t) -> RankFeatureFunction.PARSER.apply(p, t), FUNCTION);
  }

}
