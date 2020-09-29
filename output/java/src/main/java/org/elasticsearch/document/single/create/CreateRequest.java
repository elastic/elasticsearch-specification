
package org.elasticsearch.document.single.create;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class CreateRequest<TDocument> extends RequestBase<CreateRequest> implements XContentable<CreateRequest> {
  
  static final ParseField PIPELINE = new ParseField("pipeline");
  private String _pipeline;
  public String getPipeline() { return this._pipeline; }
  public CreateRequest<TDocument> setPipeline(String val) { this._pipeline = val; return this; }

  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public CreateRequest<TDocument> setRefresh(Refresh val) { this._refresh = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public CreateRequest<TDocument> setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public CreateRequest<TDocument> setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public CreateRequest<TDocument> setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }

  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public CreateRequest<TDocument> setVersionType(VersionType val) { this._versionType = val; return this; }

  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public CreateRequest<TDocument> setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_pipeline != null) {
      builder.field(PIPELINE.getPreferredName(), _pipeline);
    }
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
  }

  @Override
  public CreateRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateRequest, Void> PARSER =
    new ObjectParser<>(CreateRequest.class.getName(), false, CreateRequest::new);

  static {
    PARSER.declareString(CreateRequest::setPipeline, PIPELINE);
    PARSER.declareField(CreateRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(CreateRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareString(CreateRequest::setTimeout, TIMEOUT);
    PARSER.declareLong(CreateRequest::setVersion, VERSION);
    PARSER.declareField(CreateRequest::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CreateRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
  }

}
