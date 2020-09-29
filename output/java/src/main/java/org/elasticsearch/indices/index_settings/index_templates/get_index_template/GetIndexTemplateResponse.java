
package org.elasticsearch.indices.index_settings.index_templates.get_index_template;

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
import org.elasticsearch.indices.index_settings.index_templates.get_index_template.*;

public class GetIndexTemplateResponse extends DictionaryResponseBase<String, TemplateMapping> implements XContentable<GetIndexTemplateResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetIndexTemplateResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetIndexTemplateResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetIndexTemplateResponse, Void> PARSER =
    new ObjectParser<>(GetIndexTemplateResponse.class.getName(), false, GetIndexTemplateResponse::new);

  static {
    
  }

}
