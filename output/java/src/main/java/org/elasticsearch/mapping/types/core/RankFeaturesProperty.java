
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

public class RankFeaturesProperty extends PropertyBase implements XContentable<RankFeaturesProperty> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
