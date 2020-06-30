
package org.elasticsearch.mapping;

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

public class TypeMapping  implements XContentable<TypeMapping> {
  
  static final ParseField ALL_FIELD = new ParseField("all_field");
  private AllField _allField;
  public AllField getAllField() { return this._allField; }
  public TypeMapping setAllField(AllField val) { this._allField = val; return this; }


  static final ParseField DATE_DETECTION = new ParseField("date_detection");
  private Boolean _dateDetection;
  public Boolean getDateDetection() { return this._dateDetection; }
  public TypeMapping setDateDetection(Boolean val) { this._dateDetection = val; return this; }


  static final ParseField DYNAMIC = new ParseField("dynamic");
  private Either<Boolean, DynamicMapping> _dynamic;
  public Either<Boolean, DynamicMapping> getDynamic() { return this._dynamic; }
  public TypeMapping setDynamic(Either<Boolean, DynamicMapping> val) { this._dynamic = val; return this; }


  static final ParseField DYNAMIC_DATE_FORMATS = new ParseField("dynamic_date_formats");
  private List<String> _dynamicDateFormats;
  public List<String> getDynamicDateFormats() { return this._dynamicDateFormats; }
  public TypeMapping setDynamicDateFormats(List<String> val) { this._dynamicDateFormats = val; return this; }


  static final ParseField DYNAMIC_TEMPLATES = new ParseField("dynamic_templates");
  private NamedContainer<String, DynamicTemplate> _dynamicTemplates;
  public NamedContainer<String, DynamicTemplate> getDynamicTemplates() { return this._dynamicTemplates; }
  public TypeMapping setDynamicTemplates(NamedContainer<String, DynamicTemplate> val) { this._dynamicTemplates = val; return this; }


  static final ParseField FIELD_NAMES = new ParseField("_field_names");
  private FieldNamesField _fieldNames;
  public FieldNamesField getFieldNames() { return this._fieldNames; }
  public TypeMapping setFieldNames(FieldNamesField val) { this._fieldNames = val; return this; }


  static final ParseField INDEX_FIELD = new ParseField("index_field");
  private IndexField _indexField;
  public IndexField getIndexField() { return this._indexField; }
  public TypeMapping setIndexField(IndexField val) { this._indexField = val; return this; }


  static final ParseField META = new ParseField("_meta");
  private NamedContainer<String, Object> _meta;
  public NamedContainer<String, Object> getMeta() { return this._meta; }
  public TypeMapping setMeta(NamedContainer<String, Object> val) { this._meta = val; return this; }


  static final ParseField NUMERIC_DETECTION = new ParseField("numeric_detection");
  private Boolean _numericDetection;
  public Boolean getNumericDetection() { return this._numericDetection; }
  public TypeMapping setNumericDetection(Boolean val) { this._numericDetection = val; return this; }


  static final ParseField PROPERTIES = new ParseField("properties");
  private NamedContainer<PropertyName, IProperty> _properties;
  public NamedContainer<PropertyName, IProperty> getProperties() { return this._properties; }
  public TypeMapping setProperties(NamedContainer<PropertyName, IProperty> val) { this._properties = val; return this; }


  static final ParseField ROUTING = new ParseField("_routing");
  private RoutingField _routing;
  public RoutingField getRouting() { return this._routing; }
  public TypeMapping setRouting(RoutingField val) { this._routing = val; return this; }


  static final ParseField SIZE = new ParseField("_size");
  private SizeField _size;
  public SizeField getSize() { return this._size; }
  public TypeMapping setSize(SizeField val) { this._size = val; return this; }


  static final ParseField SOURCE = new ParseField("_source");
  private SourceField _source;
  public SourceField getSource() { return this._source; }
  public TypeMapping setSource(SourceField val) { this._source = val; return this; }


  
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
    if (_fieldNames != null) {
      builder.field(FIELD_NAMES.getPreferredName());
      _fieldNames.toXContent(builder, params);
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
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName());
      _size.toXContent(builder, params);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TypeMapping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TypeMapping.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TypeMapping, Void> PARSER =
    new ObjectParser<>(TypeMapping.class.getName(), false, TypeMapping::new);

  static {
    PARSER.declareObject(TypeMapping::setAllField, (p, t) -> AllField.PARSER.apply(p, t), ALL_FIELD);
    PARSER.declareBoolean(TypeMapping::setDateDetection, DATE_DETECTION);
    PARSER.declareObject(TypeMapping::setDynamic, (p, t) ->  new Either<Boolean, DynamicMapping>() /* TODO UnionOf */, DYNAMIC);
    PARSER.declareStringArray(TypeMapping::setDynamicDateFormats, DYNAMIC_DATE_FORMATS);
    PARSER.declareObject(TypeMapping::setDynamicTemplates, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> DynamicTemplate.PARSER.apply(pp, null)), DYNAMIC_TEMPLATES);
    PARSER.declareObject(TypeMapping::setFieldNames, (p, t) -> FieldNamesField.PARSER.apply(p, t), FIELD_NAMES);
    PARSER.declareObject(TypeMapping::setIndexField, (p, t) -> IndexField.PARSER.apply(p, t), INDEX_FIELD);
    PARSER.declareObject(TypeMapping::setMeta, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), META);
    PARSER.declareBoolean(TypeMapping::setNumericDetection, NUMERIC_DETECTION);
    PARSER.declareObject(TypeMapping::setProperties, (p, t) -> new NamedContainer<>(n -> () -> new PropertyName(n),pp -> IProperty.PARSER.apply(pp, null)), PROPERTIES);
    PARSER.declareObject(TypeMapping::setRouting, (p, t) -> RoutingField.PARSER.apply(p, t), ROUTING);
    PARSER.declareObject(TypeMapping::setSize, (p, t) -> SizeField.PARSER.apply(p, t), SIZE);
    PARSER.declareObject(TypeMapping::setSource, (p, t) -> SourceField.PARSER.apply(p, t), SOURCE);
  }

}
