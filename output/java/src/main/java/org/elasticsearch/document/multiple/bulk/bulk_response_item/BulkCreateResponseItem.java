
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

public class BulkCreateResponseItem extends BulkResponseItemBase implements XContentable<BulkCreateResponseItem> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public BulkCreateResponseItem fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkCreateResponseItem.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkCreateResponseItem, Void> PARSER =
    new ObjectParser<>(BulkCreateResponseItem.class.getName(), false, BulkCreateResponseItem::new);

  static {
    
  }

}
