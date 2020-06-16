
package org.elasticsearch.modules.snapshot_and_restore.restore;

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
import org.elasticsearch.indices.index_settings.update_index_settings.*;
import org.elasticsearch.common_abstractions.infer.indices.*;
import org.elasticsearch.common_options.time_unit.*;

public class RestoreRequest  implements XContentable<RestoreRequest> {
  
  static final ParseField IGNORE_INDEX_SETTINGS = new ParseField("ignore_index_settings");
  private List<String> _ignoreIndexSettings;
  public List<String> getIgnoreIndexSettings() { return this._ignoreIndexSettings; }
  public RestoreRequest setIgnoreIndexSettings(List<String> val) { this._ignoreIndexSettings = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public RestoreRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField INCLUDE_ALIASES = new ParseField("include_aliases");
  private Boolean _includeAliases;
  public Boolean getIncludeAliases() { return this._includeAliases; }
  public RestoreRequest setIncludeAliases(Boolean val) { this._includeAliases = val; return this; }


  static final ParseField INCLUDE_GLOBAL_STATE = new ParseField("include_global_state");
  private Boolean _includeGlobalState;
  public Boolean getIncludeGlobalState() { return this._includeGlobalState; }
  public RestoreRequest setIncludeGlobalState(Boolean val) { this._includeGlobalState = val; return this; }


  static final ParseField INDEX_SETTINGS = new ParseField("index_settings");
  private UpdateIndexSettingsRequest _indexSettings;
  public UpdateIndexSettingsRequest getIndexSettings() { return this._indexSettings; }
  public RestoreRequest setIndexSettings(UpdateIndexSettingsRequest val) { this._indexSettings = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private Indices _indices;
  public Indices getIndices() { return this._indices; }
  public RestoreRequest setIndices(Indices val) { this._indices = val; return this; }


  static final ParseField PARTIAL = new ParseField("partial");
  private Boolean _partial;
  public Boolean getPartial() { return this._partial; }
  public RestoreRequest setPartial(Boolean val) { this._partial = val; return this; }


  static final ParseField RENAME_PATTERN = new ParseField("rename_pattern");
  private String _renamePattern;
  public String getRenamePattern() { return this._renamePattern; }
  public RestoreRequest setRenamePattern(String val) { this._renamePattern = val; return this; }


  static final ParseField RENAME_REPLACEMENT = new ParseField("rename_replacement");
  private String _renameReplacement;
  public String getRenameReplacement() { return this._renameReplacement; }
  public RestoreRequest setRenameReplacement(String val) { this._renameReplacement = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public RestoreRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField WAIT_FOR_COMPLETION = new ParseField("wait_for_completion");
  private Boolean _waitForCompletion;
  public Boolean getWaitForCompletion() { return this._waitForCompletion; }
  public RestoreRequest setWaitForCompletion(Boolean val) { this._waitForCompletion = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreIndexSettings != null) {
      builder.array(IGNORE_INDEX_SETTINGS.getPreferredName(), _ignoreIndexSettings);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_includeAliases != null) {
      builder.field(INCLUDE_ALIASES.getPreferredName(), _includeAliases);
    }
    if (_includeGlobalState != null) {
      builder.field(INCLUDE_GLOBAL_STATE.getPreferredName(), _includeGlobalState);
    }
    if (_indexSettings != null) {
      builder.field(INDEX_SETTINGS.getPreferredName());
      _indexSettings.toXContent(builder, params);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_partial != null) {
      builder.field(PARTIAL.getPreferredName(), _partial);
    }
    if (_renamePattern != null) {
      builder.field(RENAME_PATTERN.getPreferredName(), _renamePattern);
    }
    if (_renameReplacement != null) {
      builder.field(RENAME_REPLACEMENT.getPreferredName(), _renameReplacement);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_waitForCompletion != null) {
      builder.field(WAIT_FOR_COMPLETION.getPreferredName(), _waitForCompletion);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RestoreRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RestoreRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RestoreRequest, Void> PARSER =
    new ObjectParser<>(RestoreRequest.class.getName(), false, RestoreRequest::new);

  static {
    PARSER.declareStringArray(RestoreRequest::setIgnoreIndexSettings, IGNORE_INDEX_SETTINGS);
    PARSER.declareBoolean(RestoreRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(RestoreRequest::setIncludeAliases, INCLUDE_ALIASES);
    PARSER.declareBoolean(RestoreRequest::setIncludeGlobalState, INCLUDE_GLOBAL_STATE);
    PARSER.declareObject(RestoreRequest::setIndexSettings, (p, t) -> UpdateIndexSettingsRequest.PARSER.apply(p, t), INDEX_SETTINGS);
    PARSER.declareObject(RestoreRequest::setIndices, (p, t) -> Indices.createFrom(p), INDICES);
    PARSER.declareBoolean(RestoreRequest::setPartial, PARTIAL);
    PARSER.declareString(RestoreRequest::setRenamePattern, RENAME_PATTERN);
    PARSER.declareString(RestoreRequest::setRenameReplacement, RENAME_REPLACEMENT);
    PARSER.declareObject(RestoreRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareBoolean(RestoreRequest::setWaitForCompletion, WAIT_FOR_COMPLETION);
  }

}
