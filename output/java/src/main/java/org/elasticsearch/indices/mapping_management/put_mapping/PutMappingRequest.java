
package org.elasticsearch.indices.mapping_management.put_mapping;

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
import org.elasticsearch.mapping.meta_fields.all.*;
import org.elasticsearch.mapping.*;
import org.elasticsearch.mapping.dynamic_template.*;
import org.elasticsearch.mapping.meta_fields.field_names.*;
import org.elasticsearch.mapping.meta_fields.index.*;
import org.elasticsearch.common_abstractions.infer.property_name.*;
import org.elasticsearch.mapping.types.*;
import org.elasticsearch.mapping.meta_fields.routing.*;
import org.elasticsearch.mapping.meta_fields.size.*;
import org.elasticsearch.mapping.meta_fields.source.*;
import org.elasticsearch.common.*;
import org.elasticsearch.common_options.time_unit.*;

public class PutMappingRequest  implements XContentable<PutMappingRequest> {
  
  static final ParseField ALL_FIELD = new ParseField("all_field");
  private AllField _allField;
  public AllField getAllField() { return this._allField; }
  public PutMappingRequest setAllField(AllField val) { this._allField = val; return this; }


  static final ParseField DATE_DETECTION = new ParseField("date_detection");
  private Boolean _dateDetection;
  public Boolean getDateDetection() { return this._dateDetection; }
  public PutMappingRequest setDateDetection(Boolean val) { this._dateDetection = val; return this; }


  static final ParseField DYNAMIC = new ParseField("dynamic");
  private Either<Boolean, DynamicMapping> _dynamic;
  public Either<Boolean, DynamicMapping> getDynamic() { return this._dynamic; }
  public PutMappingRequest setDynamic(Either<Boolean, DynamicMapping> val) { this._dynamic = val; return this; }


  static final ParseField DYNAMIC_DATE_FORMATS = new ParseField("dynamic_date_formats");
  private List<String> _dynamicDateFormats;
  public List<String> getDynamicDateFormats() { return this._dynamicDateFormats; }
  public PutMappingRequest setDynamicDateFormats(List<String> val) { this._dynamicDateFormats = val; return this; }


  static final ParseField DYNAMIC_TEMPLATES = new ParseField("dynamic_templates");
  private NamedContainer<String, DynamicTemplate> _dynamicTemplates;
  public NamedContainer<String, DynamicTemplate> getDynamicTemplates() { return this._dynamicTemplates; }
  public PutMappingRequest setDynamicTemplates(NamedContainer<String, DynamicTemplate> val) { this._dynamicTemplates = val; return this; }


  static final ParseField FIELD_NAMES_FIELD = new ParseField("field_names_field");
  private FieldNamesField _fieldNamesField;
  public FieldNamesField getFieldNamesField() { return this._fieldNamesField; }
  public PutMappingRequest setFieldNamesField(FieldNamesField val) { this._fieldNamesField = val; return this; }


  static final ParseField INDEX_FIELD = new ParseField("index_field");
  private IndexField _indexField;
  public IndexField getIndexField() { return this._indexField; }
  public PutMappingRequest setIndexField(IndexField val) { this._indexField = val; return this; }


  static final ParseField META = new ParseField("meta");
  private NamedContainer<String, Object> _meta;
  public NamedContainer<String, Object> getMeta() { return this._meta; }
  public PutMappingRequest setMeta(NamedContainer<String, Object> val) { this._meta = val; return this; }


  static final ParseField NUMERIC_DETECTION = new ParseField("numeric_detection");
  private Boolean _numericDetection;
  public Boolean getNumericDetection() { return this._numericDetection; }
  public PutMappingRequest setNumericDetection(Boolean val) { this._numericDetection = val; return this; }


  static final ParseField PROPERTIES = new ParseField("properties");
  private NamedContainer<PropertyName, IProperty> _properties;
  public NamedContainer<PropertyName, IProperty> getProperties() { return this._properties; }
  public PutMappingRequest setProperties(NamedContainer<PropertyName, IProperty> val) { this._properties = val; return this; }


  static final ParseField ROUTING_FIELD = new ParseField("routing_field");
  private RoutingField _routingField;
  public RoutingField getRoutingField() { return this._routingField; }
  public PutMappingRequest setRoutingField(RoutingField val) { this._routingField = val; return this; }


  static final ParseField SIZE_FIELD = new ParseField("size_field");
  private SizeField _sizeField;
  public SizeField getSizeField() { return this._sizeField; }
  public PutMappingRequest setSizeField(SizeField val) { this._sizeField = val; return this; }


  static final ParseField SOURCE_FIELD = new ParseField("source_field");
  private SourceField _sourceField;
  public SourceField getSourceField() { return this._sourceField; }
  public PutMappingRequest setSourceField(SourceField val) { this._sourceField = val; return this; }


  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public PutMappingRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public PutMappingRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public PutMappingRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField INCLUDE_TYPE_NAME = new ParseField("include_type_name");
  private Boolean _includeTypeName;
  public Boolean getIncludeTypeName() { return this._includeTypeName; }
  public PutMappingRequest setIncludeTypeName(Boolean val) { this._includeTypeName = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public PutMappingRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public PutMappingRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allField != null) {
      builder.field(ALL_FIELD.getPreferredName());
      _allField.toXContent(builder, params);
    }
    if (_dateDetection != null) {
      builder.field(DATE_DETECTION.getPreferredName(), _dateDetection);
    }
    if (_dynamic != null) {
      builder.field(DYNAMIC.getPreferredName());
      _dynamic.map(builder::value, r-> r.toXContent(builder, params));
    }
    if (_dynamicDateFormats != null) {
      builder.array(DYNAMIC_DATE_FORMATS.getPreferredName(), _dynamicDateFormats);
    }
    if (_dynamicTemplates != null) {
      builder.field(DYNAMIC_TEMPLATES.getPreferredName());
      _dynamicTemplates.toXContent(builder, params);
    }
    if (_fieldNamesField != null) {
      builder.field(FIELD_NAMES_FIELD.getPreferredName());
      _fieldNamesField.toXContent(builder, params);
    }
    if (_indexField != null) {
      builder.field(INDEX_FIELD.getPreferredName());
      _indexField.toXContent(builder, params);
    }
    if (_meta != null) {
      builder.field(META.getPreferredName());
      _meta.toXContent(builder, params);
    }
    if (_numericDetection != null) {
      builder.field(NUMERIC_DETECTION.getPreferredName(), _numericDetection);
    }
    if (_properties != null) {
      builder.field(PROPERTIES.getPreferredName());
      _properties.toXContent(builder, params);
    }
    if (_routingField != null) {
      builder.field(ROUTING_FIELD.getPreferredName());
      _routingField.toXContent(builder, params);
    }
    if (_sizeField != null) {
      builder.field(SIZE_FIELD.getPreferredName());
      _sizeField.toXContent(builder, params);
    }
    if (_sourceField != null) {
      builder.field(SOURCE_FIELD.getPreferredName());
      _sourceField.toXContent(builder, params);
    }
    if (_allowNoIndices != null) {
      builder.field(ALLOW_NO_INDICES.getPreferredName(), _allowNoIndices);
    }
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_includeTypeName != null) {
      builder.field(INCLUDE_TYPE_NAME.getPreferredName(), _includeTypeName);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutMappingRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutMappingRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutMappingRequest, Void> PARSER =
    new ObjectParser<>(PutMappingRequest.class.getName(), false, PutMappingRequest::new);

  static {
    PARSER.declareObject(PutMappingRequest::setAllField, (p, t) -> AllField.PARSER.apply(p, t), ALL_FIELD);
    PARSER.declareBoolean(PutMappingRequest::setDateDetection, DATE_DETECTION);
    PARSER.declareObject(PutMappingRequest::setDynamic, (p, t) ->  new Either<Boolean, DynamicMapping>() /* TODO UnionOf */, DYNAMIC);
    PARSER.declareStringArray(PutMappingRequest::setDynamicDateFormats, DYNAMIC_DATE_FORMATS);
    PARSER.declareObject(PutMappingRequest::setDynamicTemplates, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> DynamicTemplate.PARSER.apply(pp, null)), DYNAMIC_TEMPLATES);
    PARSER.declareObject(PutMappingRequest::setFieldNamesField, (p, t) -> FieldNamesField.PARSER.apply(p, t), FIELD_NAMES_FIELD);
    PARSER.declareObject(PutMappingRequest::setIndexField, (p, t) -> IndexField.PARSER.apply(p, t), INDEX_FIELD);
    PARSER.declareObject(PutMappingRequest::setMeta, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), META);
    PARSER.declareBoolean(PutMappingRequest::setNumericDetection, NUMERIC_DETECTION);
    PARSER.declareObject(PutMappingRequest::setProperties, (p, t) -> new NamedContainer<>(n -> () -> new PropertyName(n),pp -> IProperty.PARSER.apply(pp, null)), PROPERTIES);
    PARSER.declareObject(PutMappingRequest::setRoutingField, (p, t) -> RoutingField.PARSER.apply(p, t), ROUTING_FIELD);
    PARSER.declareObject(PutMappingRequest::setSizeField, (p, t) -> SizeField.PARSER.apply(p, t), SIZE_FIELD);
    PARSER.declareObject(PutMappingRequest::setSourceField, (p, t) -> SourceField.PARSER.apply(p, t), SOURCE_FIELD);
    PARSER.declareBoolean(PutMappingRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(PutMappingRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(PutMappingRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(PutMappingRequest::setIncludeTypeName, INCLUDE_TYPE_NAME);
    PARSER.declareObject(PutMappingRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareObject(PutMappingRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
