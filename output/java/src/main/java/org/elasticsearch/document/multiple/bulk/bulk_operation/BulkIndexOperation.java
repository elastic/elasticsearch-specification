
package org.elasticsearch.document.multiple.bulk.bulk_operation;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.document.multiple.bulk.bulk_operation.*;

public class BulkIndexOperation extends BulkOperation implements XContentable<BulkIndexOperation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public BulkIndexOperation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkIndexOperation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkIndexOperation, Void> PARSER =
    new ObjectParser<>(BulkIndexOperation.class.getName(), false, BulkIndexOperation::new);

  static {
    
  }

}
