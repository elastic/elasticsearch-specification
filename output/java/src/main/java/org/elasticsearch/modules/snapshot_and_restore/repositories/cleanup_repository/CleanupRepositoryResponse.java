
package org.elasticsearch.modules.snapshot_and_restore.repositories.cleanup_repository;

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
import org.elasticsearch.modules.snapshot_and_restore.repositories.cleanup_repository.*;

public class CleanupRepositoryResponse  implements XContentable<CleanupRepositoryResponse> {
  
  static final ParseField RESULTS = new ParseField("results");
  private CleanupRepositoryResults _results;
  public CleanupRepositoryResults getResults() { return this._results; }
  public CleanupRepositoryResponse setResults(CleanupRepositoryResults val) { this._results = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_results != null) {
      builder.field(RESULTS.getPreferredName());
      _results.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CleanupRepositoryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CleanupRepositoryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CleanupRepositoryResponse, Void> PARSER =
    new ObjectParser<>(CleanupRepositoryResponse.class.getName(), false, CleanupRepositoryResponse::new);

  static {
    PARSER.declareObject(CleanupRepositoryResponse::setResults, (p, t) -> CleanupRepositoryResults.PARSER.apply(p, t), RESULTS);
  }

}
