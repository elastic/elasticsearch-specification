
package org.elasticsearch.modules.snapshot_and_restore.repositories.create_repository;

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
import org.elasticsearch.modules.snapshot_and_restore.repositories.*;
import org.elasticsearch.common_options.time_unit.*;

public class CreateRepositoryRequest  implements XContentable<CreateRepositoryRequest> {
  
  static final ParseField REPOSITORY = new ParseField("repository");
  private SnapshotRepository _repository;
  public SnapshotRepository getRepository() { return this._repository; }
  public CreateRepositoryRequest setRepository(SnapshotRepository val) { this._repository = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public CreateRepositoryRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public CreateRepositoryRequest setTimeout(Time val) { this._timeout = val; return this; }


  static final ParseField VERIFY = new ParseField("verify");
  private Boolean _verify;
  public Boolean getVerify() { return this._verify; }
  public CreateRepositoryRequest setVerify(Boolean val) { this._verify = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_repository != null) {
      builder.field(REPOSITORY.getPreferredName());
      _repository.toXContent(builder, params);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    if (_verify != null) {
      builder.field(VERIFY.getPreferredName(), _verify);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CreateRepositoryRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateRepositoryRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateRepositoryRequest, Void> PARSER =
    new ObjectParser<>(CreateRepositoryRequest.class.getName(), false, CreateRepositoryRequest::new);

  static {
    PARSER.declareObject(CreateRepositoryRequest::setRepository, (p, t) -> SnapshotRepository.PARSER.apply(p, t), REPOSITORY);
    PARSER.declareObject(CreateRepositoryRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareObject(CreateRepositoryRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
    PARSER.declareBoolean(CreateRepositoryRequest::setVerify, VERIFY);
  }

}
