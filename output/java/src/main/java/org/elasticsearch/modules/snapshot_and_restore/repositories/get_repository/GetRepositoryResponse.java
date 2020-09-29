
package org.elasticsearch.modules.snapshot_and_restore.repositories.get_repository;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.modules.snapshot_and_restore.repositories.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetRepositoryResponse extends ResponseBase<GetRepositoryResponse> implements XContentable<GetRepositoryResponse> {
  
  static final ParseField REPOSITORIES = new ParseField("repositories");
  private NamedContainer<String, SnapshotRepository> _repositories;
  public NamedContainer<String, SnapshotRepository> getRepositories() { return this._repositories; }
  public GetRepositoryResponse setRepositories(NamedContainer<String, SnapshotRepository> val) { this._repositories = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_repositories != null) {
      builder.field(REPOSITORIES.getPreferredName());
      _repositories.toXContent(builder, params);
    }
  }

  @Override
  public GetRepositoryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRepositoryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRepositoryResponse, Void> PARSER =
    new ObjectParser<>(GetRepositoryResponse.class.getName(), false, GetRepositoryResponse::new);

  static {
    PARSER.declareObject(GetRepositoryResponse::setRepositories, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SnapshotRepository.PARSER.apply(pp, null)), REPOSITORIES);
  }

}
