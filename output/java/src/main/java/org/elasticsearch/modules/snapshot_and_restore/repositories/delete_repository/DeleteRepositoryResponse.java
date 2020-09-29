
package org.elasticsearch.modules.snapshot_and_restore.repositories.delete_repository;

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

public class DeleteRepositoryResponse extends AcknowledgedResponseBase implements XContentable<DeleteRepositoryResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteRepositoryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteRepositoryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteRepositoryResponse, Void> PARSER =
    new ObjectParser<>(DeleteRepositoryResponse.class.getName(), false, DeleteRepositoryResponse::new);

  static {
    
  }

}
