
package org.elasticsearch.indices.index_settings.index_templates.get_index_template;

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
import org.elasticsearch.indices.alias_management.*;
import org.elasticsearch.mapping.*;

public class TemplateMapping  implements XContentable<TemplateMapping> {
  
  static final ParseField ALIASES = new ParseField("aliases");
  private NamedContainer<String, Alias> _aliases;
  public NamedContainer<String, Alias> getAliases() { return this._aliases; }
  public TemplateMapping setAliases(NamedContainer<String, Alias> val) { this._aliases = val; return this; }

  static final ParseField INDEX_PATTERNS = new ParseField("index_patterns");
  private List<String> _indexPatterns;
  public List<String> getIndexPatterns() { return this._indexPatterns; }
  public TemplateMapping setIndexPatterns(List<String> val) { this._indexPatterns = val; return this; }

  static final ParseField MAPPINGS = new ParseField("mappings");
  private TypeMapping _mappings;
  public TypeMapping getMappings() { return this._mappings; }
  public TemplateMapping setMappings(TypeMapping val) { this._mappings = val; return this; }

  static final ParseField ORDER = new ParseField("order");
  private int _order;
  private boolean _order$isSet;
  public int getOrder() { return this._order; }
  public TemplateMapping setOrder(int val) {
    this._order = val;
    _order$isSet = true;
    return this;
  }

  static final ParseField SETTINGS = new ParseField("settings");
  private NamedContainer<String, Object> _settings;
  public NamedContainer<String, Object> getSettings() { return this._settings; }
  public TemplateMapping setSettings(NamedContainer<String, Object> val) { this._settings = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private int _version;
  private boolean _version$isSet;
  public int getVersion() { return this._version; }
  public TemplateMapping setVersion(int val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
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
    if (_order$isSet) {
      builder.field(ORDER.getPreferredName(), _order);
    }
    if (_settings != null) {
      builder.field(SETTINGS.getPreferredName());
      _settings.toXContent(builder, params);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public TemplateMapping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TemplateMapping.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TemplateMapping, Void> PARSER =
    new ObjectParser<>(TemplateMapping.class.getName(), false, TemplateMapping::new);

  static {
    PARSER.declareObject(TemplateMapping::setAliases, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> Alias.PARSER.apply(pp, null)), ALIASES);
    PARSER.declareStringArray(TemplateMapping::setIndexPatterns, INDEX_PATTERNS);
    PARSER.declareObject(TemplateMapping::setMappings, (p, t) -> TypeMapping.PARSER.apply(p, t), MAPPINGS);
    PARSER.declareInt(TemplateMapping::setOrder, ORDER);
    PARSER.declareObject(TemplateMapping::setSettings, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), SETTINGS);
    PARSER.declareInt(TemplateMapping::setVersion, VERSION);
  }

}
