
package org.elasticsearch.common_abstractions.lazy_document;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class LazyDocument  implements XContentable<LazyDocument> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public LazyDocument fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LazyDocument.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LazyDocument, Void> PARSER =
    new ObjectParser<>(LazyDocument.class.getName(), false, LazyDocument::new);

  static {
    
  }

}
