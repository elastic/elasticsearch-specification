
package org.elasticsearch.document.single.delete;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.document.single.*;
import org.elasticsearch.common_abstractions.response.*;

public class DeleteResponse extends WriteResponseBase implements XContentable<DeleteResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteResponse, Void> PARSER =
    new ObjectParser<>(DeleteResponse.class.getName(), false, DeleteResponse::new);

  static {
    
  }

}
