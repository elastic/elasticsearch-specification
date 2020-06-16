
package org.elasticsearch.cluster.cluster_state;

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
import org.elasticsearch.common.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class ClusterStateRequest  implements XContentable<ClusterStateRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public ClusterStateRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public ClusterStateRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField FLAT_SETTINGS = new ParseField("flat_settings");
  private Boolean _flatSettings;
  public Boolean getFlatSettings() { return this._flatSettings; }
  public ClusterStateRequest setFlatSettings(Boolean val) { this._flatSettings = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public ClusterStateRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public ClusterStateRequest setLocal(Boolean val) { this._local = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public ClusterStateRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField WAIT_FOR_METADATA_VERSION = new ParseField("wait_for_metadata_version");
  private Long _waitForMetadataVersion;
  public Long getWaitForMetadataVersion() { return this._waitForMetadataVersion; }
  public ClusterStateRequest setWaitForMetadataVersion(Long val) { this._waitForMetadataVersion = val; return this; }


  static final ParseField WAIT_FOR_TIMEOUT = new ParseField("wait_for_timeout");
  private Time _waitForTimeout;
  public Time getWaitForTimeout() { return this._waitForTimeout; }
  public ClusterStateRequest setWaitForTimeout(Time val) { this._waitForTimeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoIndices != null) {
      builder.field(ALLOW_NO_INDICES.getPreferredName(), _allowNoIndices);
    }
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_flatSettings != null) {
      builder.field(FLAT_SETTINGS.getPreferredName(), _flatSettings);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_local != null) {
      builder.field(LOCAL.getPreferredName(), _local);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_waitForMetadataVersion != null) {
      builder.field(WAIT_FOR_METADATA_VERSION.getPreferredName(), _waitForMetadataVersion);
    }
    if (_waitForTimeout != null) {
      builder.field(WAIT_FOR_TIMEOUT.getPreferredName());
      _waitForTimeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterStateRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterStateRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterStateRequest, Void> PARSER =
    new ObjectParser<>(ClusterStateRequest.class.getName(), false, ClusterStateRequest::new);

  static {
    PARSER.declareBoolean(ClusterStateRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareField(ClusterStateRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(ClusterStateRequest::setFlatSettings, FLAT_SETTINGS);
    PARSER.declareBoolean(ClusterStateRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(ClusterStateRequest::setLocal, LOCAL);
    PARSER.declareObject(ClusterStateRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareLong(ClusterStateRequest::setWaitForMetadataVersion, WAIT_FOR_METADATA_VERSION);
    PARSER.declareObject(ClusterStateRequest::setWaitForTimeout, (p, t) -> Time.PARSER.apply(p, t), WAIT_FOR_TIMEOUT);
  }

}
