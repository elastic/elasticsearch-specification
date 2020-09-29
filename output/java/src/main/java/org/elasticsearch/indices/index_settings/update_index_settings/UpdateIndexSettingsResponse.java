
package org.elasticsearch.indices.index_settings.update_index_settings;

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

public class UpdateIndexSettingsResponse extends AcknowledgedResponseBase implements XContentable<UpdateIndexSettingsResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public UpdateIndexSettingsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateIndexSettingsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateIndexSettingsResponse, Void> PARSER =
    new ObjectParser<>(UpdateIndexSettingsResponse.class.getName(), false, UpdateIndexSettingsResponse::new);

  static {
    
  }

}
