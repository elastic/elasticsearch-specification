
package org.elasticsearch.x_pack.ilm.actions;

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


public class LifecycleAction  implements XContentable<LifecycleAction> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public LifecycleAction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LifecycleAction.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LifecycleAction, Void> PARSER =
    new ObjectParser<>(LifecycleAction.class.getName(), false, LifecycleAction::new);

  static {
    
  }

}
