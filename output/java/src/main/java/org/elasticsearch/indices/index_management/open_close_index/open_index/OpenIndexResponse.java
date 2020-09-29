
package org.elasticsearch.indices.index_management.open_close_index.open_index;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class OpenIndexResponse extends AcknowledgedResponseBase implements XContentable<OpenIndexResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public OpenIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return OpenIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<OpenIndexResponse, Void> PARSER =
    new ObjectParser<>(OpenIndexResponse.class.getName(), false, OpenIndexResponse::new);

  static {
    
  }

}
