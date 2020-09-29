
package org.elasticsearch.indices.index_settings.get_index_settings;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.index_modules.index_settings.*;

public class GetIndexSettingsResponse extends DictionaryResponseBase<String, IndexState> implements XContentable<GetIndexSettingsResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetIndexSettingsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetIndexSettingsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetIndexSettingsResponse, Void> PARSER =
    new ObjectParser<>(GetIndexSettingsResponse.class.getName(), false, GetIndexSettingsResponse::new);

  static {
    
  }

}
