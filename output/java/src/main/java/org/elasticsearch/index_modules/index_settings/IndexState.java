
package org.elasticsearch.index_modules.index_settings;

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

public class IndexState  implements XContentable<IndexState> {
  
  static final ParseField ALIASES = new ParseField("aliases");
  private NamedContainer<IndexName, Alias> _aliases;
  public NamedContainer<IndexName, Alias> getAliases() { return this._aliases; }
  public IndexState setAliases(NamedContainer<IndexName, Alias> val) { this._aliases = val; return this; }


  static final ParseField MAPPINGS = new ParseField("mappings");
  private TypeMapping _mappings;
  public TypeMapping getMappings() { return this._mappings; }
  public IndexState setMappings(TypeMapping val) { this._mappings = val; return this; }


  static final ParseField SETTINGS = new ParseField("settings");
  private NamedContainer<String, Object> _settings;
  public NamedContainer<String, Object> getSettings() { return this._settings; }
  public IndexState setSettings(NamedContainer<String, Object> val) { this._settings = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_aliases != null) {
      builder.field(ALIASES.getPreferredName());
      _aliases.toXContent(builder, params);
    }
    if (_mappings != null) {
      builder.field(MAPPINGS.getPreferredName());
      _mappings.toXContent(builder, params);
    }
    if (_settings != null) {
      builder.field(SETTINGS.getPreferredName());
      _settings.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexState.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexState, Void> PARSER =
    new ObjectParser<>(IndexState.class.getName(), false, IndexState::new);

  static {
    PARSER.declareObject(IndexState::setAliases, (p, t) -> new NamedContainer<>(n -> () -> new IndexName(n),pp -> Alias.PARSER.apply(pp, null)), ALIASES);
    PARSER.declareObject(IndexState::setMappings, (p, t) -> TypeMapping.PARSER.apply(p, t), MAPPINGS);
    PARSER.declareObject(IndexState::setSettings, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), SETTINGS);
  }

}
