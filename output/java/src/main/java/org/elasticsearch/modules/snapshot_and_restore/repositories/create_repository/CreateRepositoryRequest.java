
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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.modules.snapshot_and_restore.repositories.*;
import org.elasticsearch.common_abstractions.request.*;

public class CreateRepositoryRequest extends RequestBase<CreateRepositoryRequest> implements XContentable<CreateRepositoryRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public CreateRepositoryRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public CreateRepositoryRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField VERIFY = new ParseField("verify");
  private Boolean _verify;
  public Boolean getVerify() { return this._verify; }
  public CreateRepositoryRequest setVerify(Boolean val) { this._verify = val; return this; }

  static final ParseField REPOSITORY = new ParseField("repository");
  private SnapshotRepository _repository;
  public SnapshotRepository getRepository() { return this._repository; }
  public CreateRepositoryRequest setRepository(SnapshotRepository val) { this._repository = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_verify != null) {
      builder.field(VERIFY.getPreferredName(), _verify);
    }
    if (_repository != null) {
      builder.field(REPOSITORY.getPreferredName());
      _repository.toXContent(builder, params);
    }
  }

  @Override
  public CreateRepositoryRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateRepositoryRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateRepositoryRequest, Void> PARSER =
    new ObjectParser<>(CreateRepositoryRequest.class.getName(), false, CreateRepositoryRequest::new);

  static {
    PARSER.declareString(CreateRepositoryRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(CreateRepositoryRequest::setTimeout, TIMEOUT);
    PARSER.declareBoolean(CreateRepositoryRequest::setVerify, VERIFY);
    PARSER.declareObject(CreateRepositoryRequest::setRepository, (p, t) -> SnapshotRepository.PARSER.apply(p, t), REPOSITORY);
  }

}
