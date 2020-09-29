
package org.elasticsearch.indices.index_management.split_index;

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
import org.elasticsearch.common_abstractions.request.*;

public class SplitIndexRequest extends RequestBase<SplitIndexRequest> implements XContentable<SplitIndexRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public SplitIndexRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public SplitIndexRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public SplitIndexRequest setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }

  static final ParseField ALIASES = new ParseField("aliases");
  private NamedContainer<String, Alias> _aliases;
  public NamedContainer<String, Alias> getAliases() { return this._aliases; }
  public SplitIndexRequest setAliases(NamedContainer<String, Alias> val) { this._aliases = val; return this; }

  static final ParseField SETTINGS = new ParseField("settings");
  private NamedContainer<String, Object> _settings;
  public NamedContainer<String, Object> getSettings() { return this._settings; }
  public SplitIndexRequest setSettings(NamedContainer<String, Object> val) { this._settings = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
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
    if (_settings != null) {
      builder.field(SETTINGS.getPreferredName());
      _settings.toXContent(builder, params);
    }
  }

  @Override
  public SplitIndexRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SplitIndexRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SplitIndexRequest, Void> PARSER =
    new ObjectParser<>(SplitIndexRequest.class.getName(), false, SplitIndexRequest::new);

  static {
    PARSER.declareString(SplitIndexRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(SplitIndexRequest::setTimeout, TIMEOUT);
    PARSER.declareString(SplitIndexRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
    PARSER.declareObject(SplitIndexRequest::setAliases, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> Alias.PARSER.apply(pp, null)), ALIASES);
    PARSER.declareObject(SplitIndexRequest::setSettings, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), SETTINGS);
  }

}
