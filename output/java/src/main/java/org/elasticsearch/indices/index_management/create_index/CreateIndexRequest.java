
package org.elasticsearch.indices.index_management.create_index;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.indices.alias_management.*;
import org.elasticsearch.mapping.*;
import org.elasticsearch.common_abstractions.request.*;

public class CreateIndexRequest extends RequestBase<CreateIndexRequest> implements XContentable<CreateIndexRequest> {
  
  static final ParseField INCLUDE_TYPE_NAME = new ParseField("include_type_name");
  private Boolean _includeTypeName;
  public Boolean getIncludeTypeName() { return this._includeTypeName; }
  public CreateIndexRequest setIncludeTypeName(Boolean val) { this._includeTypeName = val; return this; }

  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public CreateIndexRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public CreateIndexRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public CreateIndexRequest setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }

  static final ParseField ALIASES = new ParseField("aliases");
  private NamedContainer<String, Alias> _aliases;
  public NamedContainer<String, Alias> getAliases() { return this._aliases; }
  public CreateIndexRequest setAliases(NamedContainer<String, Alias> val) { this._aliases = val; return this; }

  static final ParseField MAPPINGS = new ParseField("mappings");
  private TypeMapping _mappings;
  public TypeMapping getMappings() { return this._mappings; }
  public CreateIndexRequest setMappings(TypeMapping val) { this._mappings = val; return this; }

  static final ParseField SETTINGS = new ParseField("settings");
  private NamedContainer<String, Object> _settings;
  public NamedContainer<String, Object> getSettings() { return this._settings; }
  public CreateIndexRequest setSettings(NamedContainer<String, Object> val) { this._settings = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_includeTypeName != null) {
      builder.field(INCLUDE_TYPE_NAME.getPreferredName(), _includeTypeName);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
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
  }

  @Override
  public CreateIndexRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateIndexRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateIndexRequest, Void> PARSER =
    new ObjectParser<>(CreateIndexRequest.class.getName(), false, CreateIndexRequest::new);

  static {
    PARSER.declareBoolean(CreateIndexRequest::setIncludeTypeName, INCLUDE_TYPE_NAME);
    PARSER.declareString(CreateIndexRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(CreateIndexRequest::setTimeout, TIMEOUT);
    PARSER.declareString(CreateIndexRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
    PARSER.declareObject(CreateIndexRequest::setAliases, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> Alias.PARSER.apply(pp, null)), ALIASES);
    PARSER.declareObject(CreateIndexRequest::setMappings, (p, t) -> TypeMapping.PARSER.apply(p, t), MAPPINGS);
    PARSER.declareObject(CreateIndexRequest::setSettings, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), SETTINGS);
  }

}
