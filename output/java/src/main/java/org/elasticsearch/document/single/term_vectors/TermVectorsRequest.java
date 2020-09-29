
package org.elasticsearch.document.single.term_vectors;

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
import org.elasticsearch.common.*;
import org.elasticsearch.document.single.term_vectors.*;
import org.elasticsearch.common_abstractions.request.*;

public class TermVectorsRequest<TDocument> extends RequestBase<TermVectorsRequest> implements XContentable<TermVectorsRequest> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private List<String> _fields;
  public List<String> getFields() { return this._fields; }
  public TermVectorsRequest<TDocument> setFields(List<String> val) { this._fields = val; return this; }

  static final ParseField FIELD_STATISTICS = new ParseField("field_statistics");
  private Boolean _fieldStatistics;
  public Boolean getFieldStatistics() { return this._fieldStatistics; }
  public TermVectorsRequest<TDocument> setFieldStatistics(Boolean val) { this._fieldStatistics = val; return this; }

  static final ParseField OFFSETS = new ParseField("offsets");
  private Boolean _offsets;
  public Boolean getOffsets() { return this._offsets; }
  public TermVectorsRequest<TDocument> setOffsets(Boolean val) { this._offsets = val; return this; }

  static final ParseField PAYLOADS = new ParseField("payloads");
  private Boolean _payloads;
  public Boolean getPayloads() { return this._payloads; }
  public TermVectorsRequest<TDocument> setPayloads(Boolean val) { this._payloads = val; return this; }

  static final ParseField POSITIONS = new ParseField("positions");
  private Boolean _positions;
  public Boolean getPositions() { return this._positions; }
  public TermVectorsRequest<TDocument> setPositions(Boolean val) { this._positions = val; return this; }

  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public TermVectorsRequest<TDocument> setPreference(String val) { this._preference = val; return this; }

  static final ParseField REALTIME = new ParseField("realtime");
  private Boolean _realtime;
  public Boolean getRealtime() { return this._realtime; }
  public TermVectorsRequest<TDocument> setRealtime(Boolean val) { this._realtime = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public TermVectorsRequest<TDocument> setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField TERM_STATISTICS = new ParseField("term_statistics");
  private Boolean _termStatistics;
  public Boolean getTermStatistics() { return this._termStatistics; }
  public TermVectorsRequest<TDocument> setTermStatistics(Boolean val) { this._termStatistics = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public TermVectorsRequest<TDocument> setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }

  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public TermVectorsRequest<TDocument> setVersionType(VersionType val) { this._versionType = val; return this; }

  static final ParseField DOC = new ParseField("doc");
  private TDocument _doc;
  public TDocument getDoc() { return this._doc; }
  public TermVectorsRequest<TDocument> setDoc(TDocument val) { this._doc = val; return this; }

  static final ParseField FILTER = new ParseField("filter");
  private TermVectorFilter _filter;
  public TermVectorFilter getFilter() { return this._filter; }
  public TermVectorsRequest<TDocument> setFilter(TermVectorFilter val) { this._filter = val; return this; }

  static final ParseField PER_FIELD_ANALYZER = new ParseField("per_field_analyzer");
  private NamedContainer<String, String> _perFieldAnalyzer;
  public NamedContainer<String, String> getPerFieldAnalyzer() { return this._perFieldAnalyzer; }
  public TermVectorsRequest<TDocument> setPerFieldAnalyzer(NamedContainer<String, String> val) { this._perFieldAnalyzer = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_fieldStatistics != null) {
      builder.field(FIELD_STATISTICS.getPreferredName(), _fieldStatistics);
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
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
    if (_doc != null) {
      builder.field(DOC.getPreferredName(), _doc);
    }
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_perFieldAnalyzer != null) {
      builder.field(PER_FIELD_ANALYZER.getPreferredName());
      _perFieldAnalyzer.toXContent(builder, params);
    }
  }

  @Override
  public TermVectorsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermVectorsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermVectorsRequest, Void> PARSER =
    new ObjectParser<>(TermVectorsRequest.class.getName(), false, TermVectorsRequest::new);

  static {
    PARSER.declareStringArray(TermVectorsRequest::setFields, FIELDS);
    PARSER.declareBoolean(TermVectorsRequest::setFieldStatistics, FIELD_STATISTICS);
    PARSER.declareBoolean(TermVectorsRequest::setOffsets, OFFSETS);
    PARSER.declareBoolean(TermVectorsRequest::setPayloads, PAYLOADS);
    PARSER.declareBoolean(TermVectorsRequest::setPositions, POSITIONS);
    PARSER.declareString(TermVectorsRequest::setPreference, PREFERENCE);
    PARSER.declareBoolean(TermVectorsRequest::setRealtime, REALTIME);
    PARSER.declareObject(TermVectorsRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareBoolean(TermVectorsRequest::setTermStatistics, TERM_STATISTICS);
    PARSER.declareLong(TermVectorsRequest::setVersion, VERSION);
    PARSER.declareField(TermVectorsRequest::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(TermVectorsRequest::setDoc, (p, t) -> null /* TODO TDocument */, DOC);
    PARSER.declareObject(TermVectorsRequest::setFilter, (p, t) -> TermVectorFilter.PARSER.apply(p, t), FILTER);
    PARSER.declareObject(TermVectorsRequest::setPerFieldAnalyzer, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), PER_FIELD_ANALYZER);
  }

}
