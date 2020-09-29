
package org.elasticsearch.document.multiple.bulk.bulk_response_item;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.document.multiple.bulk.bulk_response_item.*;

public class BulkIndexResponseItem extends BulkResponseItemBase implements XContentable<BulkIndexResponseItem> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public BulkIndexResponseItem fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkIndexResponseItem.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkIndexResponseItem, Void> PARSER =
    new ObjectParser<>(BulkIndexResponseItem.class.getName(), false, BulkIndexResponseItem::new);

  static {
    
  }

}
