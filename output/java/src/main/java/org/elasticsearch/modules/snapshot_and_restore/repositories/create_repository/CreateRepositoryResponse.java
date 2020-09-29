
package org.elasticsearch.modules.snapshot_and_restore.repositories.create_repository;

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

public class CreateRepositoryResponse extends AcknowledgedResponseBase implements XContentable<CreateRepositoryResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public CreateRepositoryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateRepositoryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateRepositoryResponse, Void> PARSER =
    new ObjectParser<>(CreateRepositoryResponse.class.getName(), false, CreateRepositoryResponse::new);

  static {
    
  }

}
