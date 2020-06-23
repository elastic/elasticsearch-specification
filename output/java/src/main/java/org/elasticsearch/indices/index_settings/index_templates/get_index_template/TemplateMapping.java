
package org.elasticsearch.indices.index_settings.index_templates.get_index_template;

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
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.indices.alias_management.*;
import org.elasticsearch.mapping.*;
import org.elasticsearch.internal.*;

public class TemplateMapping  implements XContentable<TemplateMapping> {
  
  static final ParseField ALIASES = new ParseField("aliases");
  private NamedContainer<IndexName, Alias> _aliases;
  public NamedContainer<IndexName, Alias> getAliases() { return this._aliases; }
  public TemplateMapping setAliases(NamedContainer<IndexName, Alias> val) { this._aliases = val; return this; }


  static final ParseField INDEX_PATTERNS = new ParseField("index_patterns");
  private List<String> _indexPatterns;
  public List<String> getIndexPatterns() { return this._indexPatterns; }
  public TemplateMapping setIndexPatterns(List<String> val) { this._indexPatterns = val; return this; }


  static final ParseField MAPPINGS = new ParseField("mappings");
  private TypeMapping _mappings;
  public TypeMapping getMappings() { return this._mappings; }
  public TemplateMapping setMappings(TypeMapping val) { this._mappings = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private Integer _order;
  public Integer getOrder() { return this._order; }
  public TemplateMapping setOrder(Integer val) { this._order = val; return this; }


  static final ParseField SETTINGS = new ParseField("settings");
  private NamedContainer<String, Object> _settings;
  public NamedContainer<String, Object> getSettings() { return this._settings; }
  public TemplateMapping setSettings(NamedContainer<String, Object> val) { this._settings = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Integer _version;
  public Integer getVersion() { return this._version; }
  public TemplateMapping setVersion(Integer val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_aliases != null) {
      builder.field(ALIASES.getPreferredName());
      _aliases.toXContent(builder, params);
    }
    if (_indexPatterns != null) {
      builder.array(INDEX_PATTERNS.getPreferredName(), _indexPatterns);
    }
    if (_mappings != null) {
      builder.field(MAPPINGS.getPreferredName());
      _mappings.toXContent(builder, params);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName(), _order);
    }
    if (_settings != null) {
      builder.field(SETTINGS.getPreferredName());
      _settings.toXContent(builder, params);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TemplateMapping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TemplateMapping.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TemplateMapping, Void> PARSER =
    new ObjectParser<>(TemplateMapping.class.getName(), false, TemplateMapping::new);

  static {
    PARSER.declareObject(TemplateMapping::setAliases, (p, t) -> new NamedContainer<>(n -> () -> new IndexName(n),pp -> Alias.PARSER.apply(pp, null)), ALIASES);
    PARSER.declareStringArray(TemplateMapping::setIndexPatterns, INDEX_PATTERNS);
    PARSER.declareObject(TemplateMapping::setMappings, (p, t) -> TypeMapping.PARSER.apply(p, t), MAPPINGS);
    PARSER.declareInt(TemplateMapping::setOrder, ORDER);
    PARSER.declareObject(TemplateMapping::setSettings, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), SETTINGS);
    PARSER.declareInt(TemplateMapping::setVersion, VERSION);
  }

}
