
package org.elasticsearch.document.single.source_exists;

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
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.request.*;

public class SourceExistsRequest extends RequestBase<SourceExistsRequest> implements XContentable<SourceExistsRequest> {
  
  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public SourceExistsRequest setPreference(String val) { this._preference = val; return this; }

  static final ParseField REALTIME = new ParseField("realtime");
  private Boolean _realtime;
  public Boolean getRealtime() { return this._realtime; }
  public SourceExistsRequest setRealtime(Boolean val) { this._realtime = val; return this; }

  static final ParseField REFRESH = new ParseField("refresh");
  private Boolean _refresh;
  public Boolean getRefresh() { return this._refresh; }
  public SourceExistsRequest setRefresh(Boolean val) { this._refresh = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public SourceExistsRequest setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField SOURCE_ENABLED = new ParseField("source_enabled");
  private Boolean _sourceEnabled;
  public Boolean getSourceEnabled() { return this._sourceEnabled; }
  public SourceExistsRequest setSourceEnabled(Boolean val) { this._sourceEnabled = val; return this; }

  static final ParseField SOURCE_EXCLUDES = new ParseField("source_excludes");
  private List<String> _sourceExcludes;
  public List<String> getSourceExcludes() { return this._sourceExcludes; }
  public SourceExistsRequest setSourceExcludes(List<String> val) { this._sourceExcludes = val; return this; }

  static final ParseField SOURCE_INCLUDES = new ParseField("source_includes");
  private List<String> _sourceIncludes;
  public List<String> getSourceIncludes() { return this._sourceIncludes; }
  public SourceExistsRequest setSourceIncludes(List<String> val) { this._sourceIncludes = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public SourceExistsRequest setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }

  static final ParseField VERSION_TYPE = new ParseField("version_type");
  private VersionType _versionType;
  public VersionType getVersionType() { return this._versionType; }
  public SourceExistsRequest setVersionType(VersionType val) { this._versionType = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_preference != null) {
      builder.field(PREFERENCE.getPreferredName(), _preference);
    }
    if (_realtime != null) {
      builder.field(REALTIME.getPreferredName(), _realtime);
    }
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName(), _refresh);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_sourceEnabled != null) {
      builder.field(SOURCE_ENABLED.getPreferredName(), _sourceEnabled);
    }
    if (_sourceExcludes != null) {
      builder.array(SOURCE_EXCLUDES.getPreferredName(), _sourceExcludes);
    }
    if (_sourceIncludes != null) {
      builder.array(SOURCE_INCLUDES.getPreferredName(), _sourceIncludes);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_versionType != null) {
      builder.field(VERSION_TYPE.getPreferredName());
      _versionType.toXContent(builder, params);
    }
  }

  @Override
  public SourceExistsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SourceExistsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SourceExistsRequest, Void> PARSER =
    new ObjectParser<>(SourceExistsRequest.class.getName(), false, SourceExistsRequest::new);

  static {
    PARSER.declareString(SourceExistsRequest::setPreference, PREFERENCE);
    PARSER.declareBoolean(SourceExistsRequest::setRealtime, REALTIME);
    PARSER.declareBoolean(SourceExistsRequest::setRefresh, REFRESH);
    PARSER.declareObject(SourceExistsRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareBoolean(SourceExistsRequest::setSourceEnabled, SOURCE_ENABLED);
    PARSER.declareStringArray(SourceExistsRequest::setSourceExcludes, SOURCE_EXCLUDES);
    PARSER.declareStringArray(SourceExistsRequest::setSourceIncludes, SOURCE_INCLUDES);
    PARSER.declareLong(SourceExistsRequest::setVersion, VERSION);
    PARSER.declareField(SourceExistsRequest::setVersionType, (p, t) -> VersionType.PARSER.apply(p), VERSION_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
