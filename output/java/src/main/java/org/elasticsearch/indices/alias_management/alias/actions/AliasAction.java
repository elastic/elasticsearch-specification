
package org.elasticsearch.indices.alias_management.alias.actions;

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


public class AliasAction  implements XContentable<AliasAction> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public AliasAction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AliasAction.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AliasAction, Void> PARSER =
    new ObjectParser<>(AliasAction.class.getName(), false, AliasAction::new);

  static {
    
  }

}
