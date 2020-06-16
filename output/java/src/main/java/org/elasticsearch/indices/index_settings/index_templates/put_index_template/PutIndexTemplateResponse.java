
package org.elasticsearch.indices.index_settings.index_templates.put_index_template;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class PutIndexTemplateResponse  implements XContentable<PutIndexTemplateResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
