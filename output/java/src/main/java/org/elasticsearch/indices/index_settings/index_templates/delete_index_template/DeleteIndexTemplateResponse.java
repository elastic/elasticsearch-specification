
package org.elasticsearch.indices.index_settings.index_templates.delete_index_template;

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

public class DeleteIndexTemplateResponse extends AcknowledgedResponseBase implements XContentable<DeleteIndexTemplateResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteIndexTemplateResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteIndexTemplateResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteIndexTemplateResponse, Void> PARSER =
    new ObjectParser<>(DeleteIndexTemplateResponse.class.getName(), false, DeleteIndexTemplateResponse::new);

  static {
    
  }

}
