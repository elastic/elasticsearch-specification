
package org.elasticsearch.document.multiple.bulk.bulk_operation;

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
import org.elasticsearch.common_abstractions.infer.id.*;
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.common.*;

public class BulkOperation  implements XContentable<BulkOperation> {
  
  static final ParseField ID = new ParseField("_id");
  private Id _id;
  public Id getId() { return this._id; }
  public BulkOperation setId(Id val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("_index");
  private IndexName _index;
  public IndexName getIndex() { return this._index; }
  public BulkOperation setIndex(IndexName val) { this._index = val; return this; }


  static final ParseField OPERATION = new ParseField("operation");
  private String _operation;
  public String getOperation() { return this._operation; }
  public BulkOperation setOperation(String val) { this._operation = val; return this; }


  static final ParseField RETRY_ON_CONFLICT = new ParseField("retry_on_conflict");
  private Integer _retryOnConflict;
  public Integer getRetryOnConflict() { return this._retryOnConflict; }
  public BulkOperation setRetryOnConflict(Integer val) { this._retryOnConflict = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public BulkOperation setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public BulkOperation setVersion(Long val) { this._version = val; return this; }


  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public BulkOperation setVersionType(VersionType val) { this._versionType = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_operation != null) {
      builder.field(OPERATION.getPreferredName(), _operation);
    }
    if (_retryOnConflict != null) {
      builder.field(RETRY_ON_CONFLICT.getPreferredName(), _retryOnConflict);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public BulkOperation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkOperation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkOperation, Void> PARSER =
    new ObjectParser<>(BulkOperation.class.getName(), false, BulkOperation::new);

  static {
    PARSER.declareObject(BulkOperation::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareObject(BulkOperation::setIndex, (p, t) -> IndexName.createFrom(p), INDEX);
    PARSER.declareString(BulkOperation::setOperation, OPERATION);
    PARSER.declareInt(BulkOperation::setRetryOnConflict, RETRY_ON_CONFLICT);
    PARSER.declareObject(BulkOperation::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareLong(BulkOperation::setVersion, VERSION);
    PARSER.declareField(BulkOperation::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
