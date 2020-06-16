
package org.elasticsearch.document.multiple.multi_term_vectors;

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
import org.elasticsearch.document.multiple.multi_term_vectors.*;
import org.elasticsearch.common_abstractions.infer.id.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common.*;

public class MultiTermVectorsRequest  implements XContentable<MultiTermVectorsRequest> {
  
  static final ParseField DOCS = new ParseField("docs");
  private List<MultiTermVectorOperation> _docs;
  public List<MultiTermVectorOperation> getDocs() { return this._docs; }
  public MultiTermVectorsRequest setDocs(List<MultiTermVectorOperation> val) { this._docs = val; return this; }


  static final ParseField IDS = new ParseField("ids");
  private List<Id> _ids;
  public List<Id> getIds() { return this._ids; }
  public MultiTermVectorsRequest setIds(List<Id> val) { this._ids = val; return this; }


  static final ParseField FIELD_STATISTICS = new ParseField("field_statistics");
  private Boolean _fieldStatistics;
  public Boolean getFieldStatistics() { return this._fieldStatistics; }
  public MultiTermVectorsRequest setFieldStatistics(Boolean val) { this._fieldStatistics = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private List<Field> _fields;
  public List<Field> getFields() { return this._fields; }
  public MultiTermVectorsRequest setFields(List<Field> val) { this._fields = val; return this; }


  static final ParseField OFFSETS = new ParseField("offsets");
  private Boolean _offsets;
  public Boolean getOffsets() { return this._offsets; }
  public MultiTermVectorsRequest setOffsets(Boolean val) { this._offsets = val; return this; }


  static final ParseField PAYLOADS = new ParseField("payloads");
  private Boolean _payloads;
  public Boolean getPayloads() { return this._payloads; }
  public MultiTermVectorsRequest setPayloads(Boolean val) { this._payloads = val; return this; }


  static final ParseField POSITIONS = new ParseField("positions");
  private Boolean _positions;
  public Boolean getPositions() { return this._positions; }
  public MultiTermVectorsRequest setPositions(Boolean val) { this._positions = val; return this; }


  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public MultiTermVectorsRequest setPreference(String val) { this._preference = val; return this; }


  static final ParseField REALTIME = new ParseField("realtime");
  private Boolean _realtime;
  public Boolean getRealtime() { return this._realtime; }
  public MultiTermVectorsRequest setRealtime(Boolean val) { this._realtime = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public MultiTermVectorsRequest setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField TERM_STATISTICS = new ParseField("term_statistics");
  private Boolean _termStatistics;
  public Boolean getTermStatistics() { return this._termStatistics; }
  public MultiTermVectorsRequest setTermStatistics(Boolean val) { this._termStatistics = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public MultiTermVectorsRequest setVersion(Long val) { this._version = val; return this; }


  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public MultiTermVectorsRequest setVersionType(VersionType val) { this._versionType = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_docs != null) {
      builder.array(DOCS.getPreferredName(), _docs);
    }
    if (_ids != null) {
      builder.array(IDS.getPreferredName(), _ids);
    }
    if (_fieldStatistics != null) {
      builder.field(FIELD_STATISTICS.getPreferredName(), _fieldStatistics);
    }
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_offsets != null) {
      builder.field(OFFSETS.getPreferredName(), _offsets);
    }
    if (_payloads != null) {
      builder.field(PAYLOADS.getPreferredName(), _payloads);
    }
    if (_positions != null) {
      builder.field(POSITIONS.getPreferredName(), _positions);
    }
    if (_preference != null) {
      builder.field(PREFERENCE.getPreferredName(), _preference);
    }
    if (_realtime != null) {
      builder.field(REALTIME.getPreferredName(), _realtime);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_termStatistics != null) {
      builder.field(TERM_STATISTICS.getPreferredName(), _termStatistics);
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
  public MultiTermVectorsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiTermVectorsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiTermVectorsRequest, Void> PARSER =
    new ObjectParser<>(MultiTermVectorsRequest.class.getName(), false, MultiTermVectorsRequest::new);

  static {
    PARSER.declareObjectArray(MultiTermVectorsRequest::setDocs, (p, t) -> MultiTermVectorOperation.PARSER.apply(p, t), DOCS);
    PARSER.declareObjectArray(MultiTermVectorsRequest::setIds, (p, t) -> Id.createFrom(p), IDS);
    PARSER.declareBoolean(MultiTermVectorsRequest::setFieldStatistics, FIELD_STATISTICS);
    PARSER.declareObjectArray(MultiTermVectorsRequest::setFields, (p, t) -> Field.createFrom(p), FIELDS);
    PARSER.declareBoolean(MultiTermVectorsRequest::setOffsets, OFFSETS);
    PARSER.declareBoolean(MultiTermVectorsRequest::setPayloads, PAYLOADS);
    PARSER.declareBoolean(MultiTermVectorsRequest::setPositions, POSITIONS);
    PARSER.declareString(MultiTermVectorsRequest::setPreference, PREFERENCE);
    PARSER.declareBoolean(MultiTermVectorsRequest::setRealtime, REALTIME);
    PARSER.declareObject(MultiTermVectorsRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareBoolean(MultiTermVectorsRequest::setTermStatistics, TERM_STATISTICS);
    PARSER.declareLong(MultiTermVectorsRequest::setVersion, VERSION);
    PARSER.declareField(MultiTermVectorsRequest::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
