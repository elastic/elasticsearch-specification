
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
import org.elasticsearch.common_options.time_unit.*;

public class DeleteRepositoryRequest  implements XContentable<DeleteRepositoryRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public DeleteRepositoryRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public DeleteRepositoryRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteRepositoryRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteRepositoryRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteRepositoryRequest, Void> PARSER =
    new ObjectParser<>(DeleteRepositoryRequest.class.getName(), false, DeleteRepositoryRequest::new);

  static {
    PARSER.declareObject(DeleteRepositoryRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareObject(DeleteRepositoryRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
