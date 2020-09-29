
package org.elasticsearch.indices.index_settings.index_templates.put_index_template;

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

public class PutIndexTemplateResponse extends AcknowledgedResponseBase implements XContentable<PutIndexTemplateResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PutIndexTemplateResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutIndexTemplateResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutIndexTemplateResponse, Void> PARSER =
    new ObjectParser<>(PutIndexTemplateResponse.class.getName(), false, PutIndexTemplateResponse::new);

  static {
    
  }

}
