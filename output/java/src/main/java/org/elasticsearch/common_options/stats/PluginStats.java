
package org.elasticsearch.common_options.stats;

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


public class PluginStats  implements XContentable<PluginStats> {
  
  static final ParseField CLASSNAME = new ParseField("classname");
  private String _classname;
  public String getClassname() { return this._classname; }
  public PluginStats setClassname(String val) { this._classname = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PluginStats setDescription(String val) { this._description = val; return this; }


  static final ParseField ELASTICSEARCH_VERSION = new ParseField("elasticsearch_version");
  private String _elasticsearchVersion;
  public String getElasticsearchVersion() { return this._elasticsearchVersion; }
  public PluginStats setElasticsearchVersion(String val) { this._elasticsearchVersion = val; return this; }


  static final ParseField EXTENDED_PLUGINS = new ParseField("extended_plugins");
  private List<String> _extendedPlugins;
  public List<String> getExtendedPlugins() { return this._extendedPlugins; }
  public PluginStats setExtendedPlugins(List<String> val) { this._extendedPlugins = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public PluginStats setName(String val) { this._name = val; return this; }


  static final ParseField HAS_NATIVE_CONTROLLER = new ParseField("has_native_controller");
  private Boolean _hasNativeController;
  public Boolean getHasNativeController() { return this._hasNativeController; }
  public PluginStats setHasNativeController(Boolean val) { this._hasNativeController = val; return this; }


  static final ParseField JAVA_VERSION = new ParseField("java_version");
  private String _javaVersion;
  public String getJavaVersion() { return this._javaVersion; }
  public PluginStats setJavaVersion(String val) { this._javaVersion = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public PluginStats setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_classname != null) {
      builder.field(CLASSNAME.getPreferredName(), _classname);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_elasticsearchVersion != null) {
      builder.field(ELASTICSEARCH_VERSION.getPreferredName(), _elasticsearchVersion);
    }
    if (_extendedPlugins != null) {
      builder.array(EXTENDED_PLUGINS.getPreferredName(), _extendedPlugins);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_hasNativeController != null) {
      builder.field(HAS_NATIVE_CONTROLLER.getPreferredName(), _hasNativeController);
    }
    if (_javaVersion != null) {
      builder.field(JAVA_VERSION.getPreferredName(), _javaVersion);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PluginStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PluginStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PluginStats, Void> PARSER =
    new ObjectParser<>(PluginStats.class.getName(), false, PluginStats::new);

  static {
    PARSER.declareString(PluginStats::setClassname, CLASSNAME);
    PARSER.declareString(PluginStats::setDescription, DESCRIPTION);
    PARSER.declareString(PluginStats::setElasticsearchVersion, ELASTICSEARCH_VERSION);
    PARSER.declareStringArray(PluginStats::setExtendedPlugins, EXTENDED_PLUGINS);
    PARSER.declareString(PluginStats::setName, NAME);
    PARSER.declareBoolean(PluginStats::setHasNativeController, HAS_NATIVE_CONTROLLER);
    PARSER.declareString(PluginStats::setJavaVersion, JAVA_VERSION);
    PARSER.declareString(PluginStats::setVersion, VERSION);
  }

}
