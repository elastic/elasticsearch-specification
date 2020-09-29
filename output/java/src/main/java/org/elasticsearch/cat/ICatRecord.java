
package org.elasticsearch.cat;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class ICatRecord  implements XContentable<ICatRecord> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
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
