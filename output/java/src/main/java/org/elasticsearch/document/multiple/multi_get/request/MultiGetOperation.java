
package org.elasticsearch.document.multiple.multi_get.request;

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
import org.elasticsearch.search.search.source_filtering.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common.*;

public class MultiGetOperation  implements XContentable<MultiGetOperation> {
  
  static final ParseField CAN_BE_FLATTENED = new ParseField("can_be_flattened");
  private Boolean _canBeFlattened;
  public Boolean getCanBeFlattened() { return this._canBeFlattened; }
  public MultiGetOperation setCanBeFlattened(Boolean val) { this._canBeFlattened = val; return this; }


  static final ParseField ID = new ParseField("_id");
  private Id _id;
  public Id getId() { return this._id; }
  public MultiGetOperation setId(Id val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("_index");
  private IndexName _index;
  public IndexName getIndex() { return this._index; }
  public MultiGetOperation setIndex(IndexName val) { this._index = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private String _routing;
  public String getRouting() { return this._routing; }
  public MultiGetOperation setRouting(String val) { this._routing = val; return this; }


  static final ParseField SOURCE = new ParseField("_source");
  private Either<Boolean, SourceFilter> _source;
  public Either<Boolean, SourceFilter> getSource() { return this._source; }
  public MultiGetOperation setSource(Either<Boolean, SourceFilter> val) { this._source = val; return this; }


  static final ParseField STORED_FIELDS = new ParseField("stored_fields");
  private List<Field> _storedFields;
  public List<Field> getStoredFields() { return this._storedFields; }
  public MultiGetOperation setStoredFields(List<Field> val) { this._storedFields = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public MultiGetOperation setVersion(Long val) { this._version = val; return this; }


  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public MultiGetOperation setVersionType(VersionType val) { this._versionType = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_canBeFlattened != null) {
      builder.field(CAN_BE_FLATTENED.getPreferredName(), _canBeFlattened);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName(), _routing);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.map(builder::value, r-> r.toXContent(builder, params));
    }
    if (_storedFields != null) {
      builder.array(STORED_FIELDS.getPreferredName(), _storedFields);
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
  public MultiGetOperation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiGetOperation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiGetOperation, Void> PARSER =
    new ObjectParser<>(MultiGetOperation.class.getName(), false, MultiGetOperation::new);

  static {
    PARSER.declareBoolean(MultiGetOperation::setCanBeFlattened, CAN_BE_FLATTENED);
    PARSER.declareObject(MultiGetOperation::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareObject(MultiGetOperation::setIndex, (p, t) -> IndexName.createFrom(p), INDEX);
    PARSER.declareString(MultiGetOperation::setRouting, ROUTING);
    PARSER.declareObject(MultiGetOperation::setSource, (p, t) ->  new Either<Boolean, SourceFilter>() /* TODO UnionOf */, SOURCE);
    PARSER.declareObjectArray(MultiGetOperation::setStoredFields, (p, t) -> Field.createFrom(p), STORED_FIELDS);
    PARSER.declareLong(MultiGetOperation::setVersion, VERSION);
    PARSER.declareField(MultiGetOperation::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
