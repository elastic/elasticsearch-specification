
package org.elasticsearch.document.multiple.multi_get.request;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.search.source_filtering.*;
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
  private String _index;
  public String getIndex() { return this._index; }
  public MultiGetOperation setIndex(String val) { this._index = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private String _routing;
  public String getRouting() { return this._routing; }
  public MultiGetOperation setRouting(String val) { this._routing = val; return this; }

  static final ParseField SOURCE = new ParseField("_source");
  private Union2<Boolean, SourceFilter> _source;
  public Union2<Boolean, SourceFilter> getSource() { return this._source; }
  public MultiGetOperation setSource(Union2<Boolean, SourceFilter> val) { this._source = val; return this; }

  static final ParseField STORED_FIELDS = new ParseField("stored_fields");
  private List<String> _storedFields;
  public List<String> getStoredFields() { return this._storedFields; }
  public MultiGetOperation setStoredFields(List<String> val) { this._storedFields = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public MultiGetOperation setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }

  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public MultiGetOperation setVersionType(VersionType val) { this._versionType = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_canBeFlattened != null) {
      builder.field(CAN_BE_FLATTENED.getPreferredName(), _canBeFlattened);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName(), _routing);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.toXContent(builder, params);
    }
    if (_storedFields != null) {
      builder.array(STORED_FIELDS.getPreferredName(), _storedFields);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
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
    PARSER.declareString(MultiGetOperation::setIndex, INDEX);
    PARSER.declareString(MultiGetOperation::setRouting, ROUTING);
    PARSER.declareObject(MultiGetOperation::setSource, (p, t) ->  new Union2<Boolean, SourceFilter>(), SOURCE);
    PARSER.declareStringArray(MultiGetOperation::setStoredFields, STORED_FIELDS);
    PARSER.declareLong(MultiGetOperation::setVersion, VERSION);
    PARSER.declareField(MultiGetOperation::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
