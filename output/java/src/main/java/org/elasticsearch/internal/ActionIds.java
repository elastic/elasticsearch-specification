
package org.elasticsearch.internal;

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


public class ActionIds  implements XContentable<ActionIds> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public ActionIds fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ActionIds.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ActionIds, Void> PARSER =
    new ObjectParser<>(ActionIds.class.getName(), false, ActionIds::new);

  static {
    
  }

}
