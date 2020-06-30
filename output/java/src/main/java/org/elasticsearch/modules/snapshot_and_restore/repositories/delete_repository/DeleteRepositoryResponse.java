
package org.elasticsearch.modules.snapshot_and_restore.repositories.delete_repository;

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


public class DeleteRepositoryResponse  implements XContentable<DeleteRepositoryResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
