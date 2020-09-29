
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

public class BulkCreateOperation extends BulkOperation implements XContentable<BulkCreateOperation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public BulkCreateOperation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkCreateOperation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkCreateOperation, Void> PARSER =
    new ObjectParser<>(BulkCreateOperation.class.getName(), false, BulkCreateOperation::new);

  static {
    
  }

}
