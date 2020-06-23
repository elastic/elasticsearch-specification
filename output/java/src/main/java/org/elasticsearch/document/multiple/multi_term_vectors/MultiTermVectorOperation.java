
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
import org.elasticsearch.document.single.term_vectors.*;
import org.elasticsearch.common_abstractions.infer.id.*;
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common.*;

public class MultiTermVectorOperation  implements XContentable<MultiTermVectorOperation> {
  
  static final ParseField DOC = new ParseField("doc");
  private Object _doc;
  public Object getDoc() { return this._doc; }
  public MultiTermVectorOperation setDoc(Object val) { this._doc = val; return this; }


  static final ParseField FIELD_STATISTICS = new ParseField("field_statistics");
  private Boolean _fieldStatistics;
  public Boolean getFieldStatistics() { return this._fieldStatistics; }
  public MultiTermVectorOperation setFieldStatistics(Boolean val) { this._fieldStatistics = val; return this; }


  static final ParseField FILTER = new ParseField("filter");
  private TermVectorFilter _filter;
  public TermVectorFilter getFilter() { return this._filter; }
  public MultiTermVectorOperation setFilter(TermVectorFilter val) { this._filter = val; return this; }


  static final ParseField ID = new ParseField("_id");
  private Id _id;
  public Id getId() { return this._id; }
  public MultiTermVectorOperation setId(Id val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("_index");
  private IndexName _index;
  public IndexName getIndex() { return this._index; }
  public MultiTermVectorOperation setIndex(IndexName val) { this._index = val; return this; }


  static final ParseField OFFSETS = new ParseField("offsets");
  private Boolean _offsets;
  public Boolean getOffsets() { return this._offsets; }
  public MultiTermVectorOperation setOffsets(Boolean val) { this._offsets = val; return this; }


  static final ParseField PAYLOADS = new ParseField("payloads");
  private Boolean _payloads;
  public Boolean getPayloads() { return this._payloads; }
  public MultiTermVectorOperation setPayloads(Boolean val) { this._payloads = val; return this; }


  static final ParseField POSITIONS = new ParseField("positions");
  private Boolean _positions;
  public Boolean getPositions() { return this._positions; }
  public MultiTermVectorOperation setPositions(Boolean val) { this._positions = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public MultiTermVectorOperation setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private List<Field> _fields;
  public List<Field> getFields() { return this._fields; }
  public MultiTermVectorOperation setFields(List<Field> val) { this._fields = val; return this; }


  static final ParseField TERM_STATISTICS = new ParseField("term_statistics");
  private Boolean _termStatistics;
  public Boolean getTermStatistics() { return this._termStatistics; }
  public MultiTermVectorOperation setTermStatistics(Boolean val) { this._termStatistics = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public MultiTermVectorOperation setVersion(Long val) { this._version = val; return this; }


  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public MultiTermVectorOperation setVersionType(VersionType val) { this._versionType = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_doc != null) {
      builder.field(DOC.getPreferredName(), _doc);
    }
    if (_fieldStatistics != null) {
      builder.field(FIELD_STATISTICS.getPreferredName(), _fieldStatistics);
    }
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
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
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
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
  public MultiTermVectorOperation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiTermVectorOperation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiTermVectorOperation, Void> PARSER =
    new ObjectParser<>(MultiTermVectorOperation.class.getName(), false, MultiTermVectorOperation::new);

  static {
    PARSER.declareObject(MultiTermVectorOperation::setDoc, (p, t) -> p.objectText(), DOC);
    PARSER.declareBoolean(MultiTermVectorOperation::setFieldStatistics, FIELD_STATISTICS);
    PARSER.declareObject(MultiTermVectorOperation::setFilter, (p, t) -> TermVectorFilter.PARSER.apply(p, t), FILTER);
    PARSER.declareObject(MultiTermVectorOperation::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareObject(MultiTermVectorOperation::setIndex, (p, t) -> IndexName.createFrom(p), INDEX);
    PARSER.declareBoolean(MultiTermVectorOperation::setOffsets, OFFSETS);
    PARSER.declareBoolean(MultiTermVectorOperation::setPayloads, PAYLOADS);
    PARSER.declareBoolean(MultiTermVectorOperation::setPositions, POSITIONS);
    PARSER.declareObject(MultiTermVectorOperation::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObjectArray(MultiTermVectorOperation::setFields, (p, t) -> Field.createFrom(p), FIELDS);
    PARSER.declareBoolean(MultiTermVectorOperation::setTermStatistics, TERM_STATISTICS);
    PARSER.declareLong(MultiTermVectorOperation::setVersion, VERSION);
    PARSER.declareField(MultiTermVectorOperation::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
