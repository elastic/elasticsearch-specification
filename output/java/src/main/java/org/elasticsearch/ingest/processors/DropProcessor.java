
package org.elasticsearch.ingest.processors;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.ingest.*;

public class DropProcessor extends ProcessorBase implements XContentable<DropProcessor> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DropProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DropProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DropProcessor, Void> PARSER =
    new ObjectParser<>(DropProcessor.class.getName(), false, DropProcessor::new);

  static {
    
  }

}
