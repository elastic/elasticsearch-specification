
package org.elasticsearch.common_abstractions.response;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public abstract class ResponseBase<T extends ResponseBase<T>>  implements XContentable<T> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    toXContentInternal(builder, params);
    builder.endObject();
    return builder;
  }

  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
  }

}
