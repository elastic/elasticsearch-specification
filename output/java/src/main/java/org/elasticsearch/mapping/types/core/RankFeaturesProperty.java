
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


public class RankFeaturesProperty  implements XContentable<RankFeaturesProperty> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public RankFeaturesProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RankFeaturesProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RankFeaturesProperty, Void> PARSER =
    new ObjectParser<>(RankFeaturesProperty.class.getName(), false, RankFeaturesProperty::new);

  static {
    
  }

}
