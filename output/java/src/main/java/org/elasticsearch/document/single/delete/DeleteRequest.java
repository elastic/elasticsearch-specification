
package org.elasticsearch.document.single.delete;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.common_options.time_unit.*;

public class DeleteRequest  implements XContentable<DeleteRequest> {
  
  static final ParseField IF_PRIMARY_TERM = new ParseField("if_primary_term");
  private Long _ifPrimaryTerm;
  public Long getIfPrimaryTerm() { return this._ifPrimaryTerm; }
  public DeleteRequest setIfPrimaryTerm(Long val) { this._ifPrimaryTerm = val; return this; }


  static final ParseField IF_SEQUENCE_NUMBER = new ParseField("if_sequence_number");
  private Long _ifSequenceNumber;
  public Long getIfSequenceNumber() { return this._ifSequenceNumber; }
  public DeleteRequest setIfSequenceNumber(Long val) { this._ifSequenceNumber = val; return this; }


  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public DeleteRequest setRefresh(Refresh val) { this._refresh = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public DeleteRequest setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public DeleteRequest setTimeout(Time val) { this._timeout = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public DeleteRequest setVersion(Long val) { this._version = val; return this; }


  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public DeleteRequest setVersionType(VersionType val) { this._versionType = val; return this; }


  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public DeleteRequest setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ifPrimaryTerm != null) {
      builder.field(IF_PRIMARY_TERM.getPreferredName(), _ifPrimaryTerm);
    }
    if (_ifSequenceNumber != null) {
      builder.field(IF_SEQUENCE_NUMBER.getPreferredName(), _ifSequenceNumber);
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
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteRequest, Void> PARSER =
    new ObjectParser<>(DeleteRequest.class.getName(), false, DeleteRequest::new);

  static {
    PARSER.declareLong(DeleteRequest::setIfPrimaryTerm, IF_PRIMARY_TERM);
    PARSER.declareLong(DeleteRequest::setIfSequenceNumber, IF_SEQUENCE_NUMBER);
    PARSER.declareField(DeleteRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(DeleteRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObject(DeleteRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
    PARSER.declareLong(DeleteRequest::setVersion, VERSION);
    PARSER.declareField(DeleteRequest::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(DeleteRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
  }

}
