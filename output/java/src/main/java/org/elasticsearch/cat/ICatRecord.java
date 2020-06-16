
package org.elasticsearch.cat;

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


public class ICatRecord  implements XContentable<ICatRecord> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public ICatRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ICatRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ICatRecord, Void> PARSER =
    new ObjectParser<>(ICatRecord.class.getName(), false, ICatRecord::new);

  static {
    
  }

}
