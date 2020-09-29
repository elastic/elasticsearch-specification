
package org.elasticsearch.document.multiple.multi_get.request;

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
import org.elasticsearch.document.multiple.multi_get.request.*;
import org.elasticsearch.common_abstractions.request.*;

public class MultiGetRequest extends RequestBase<MultiGetRequest> implements XContentable<MultiGetRequest> {
  
  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public MultiGetRequest setPreference(String val) { this._preference = val; return this; }

  static final ParseField REALTIME = new ParseField("realtime");
  private Boolean _realtime;
  public Boolean getRealtime() { return this._realtime; }
  public MultiGetRequest setRealtime(Boolean val) { this._realtime = val; return this; }

  static final ParseField REFRESH = new ParseField("refresh");
  private Boolean _refresh;
  public Boolean getRefresh() { return this._refresh; }
  public MultiGetRequest setRefresh(Boolean val) { this._refresh = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public MultiGetRequest setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField SOURCE_ENABLED = new ParseField("source_enabled");
  private Boolean _sourceEnabled;
  public Boolean getSourceEnabled() { return this._sourceEnabled; }
  public MultiGetRequest setSourceEnabled(Boolean val) { this._sourceEnabled = val; return this; }

  static final ParseField SOURCE_EXCLUDES = new ParseField("source_excludes");
  private List<String> _sourceExcludes;
  public List<String> getSourceExcludes() { return this._sourceExcludes; }
  public MultiGetRequest setSourceExcludes(List<String> val) { this._sourceExcludes = val; return this; }

  static final ParseField SOURCE_INCLUDES = new ParseField("source_includes");
  private List<String> _sourceIncludes;
  public List<String> getSourceIncludes() { return this._sourceIncludes; }
  public MultiGetRequest setSourceIncludes(List<String> val) { this._sourceIncludes = val; return this; }

  static final ParseField STORED_FIELDS = new ParseField("stored_fields");
  private List<String> _storedFields;
  public List<String> getStoredFields() { return this._storedFields; }
  public MultiGetRequest setStoredFields(List<String> val) { this._storedFields = val; return this; }

  static final ParseField DOCS = new ParseField("docs");
  private List<MultiGetOperation> _docs;
  public List<MultiGetOperation> getDocs() { return this._docs; }
  public MultiGetRequest setDocs(List<MultiGetOperation> val) { this._docs = val; return this; }


  
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
    if (_storedFields != null) {
      builder.array(STORED_FIELDS.getPreferredName(), _storedFields);
    }
    if (_docs != null) {
      builder.array(DOCS.getPreferredName(), _docs);
    }
  }

  @Override
  public MultiGetRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiGetRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiGetRequest, Void> PARSER =
    new ObjectParser<>(MultiGetRequest.class.getName(), false, MultiGetRequest::new);

  static {
    PARSER.declareString(MultiGetRequest::setPreference, PREFERENCE);
    PARSER.declareBoolean(MultiGetRequest::setRealtime, REALTIME);
    PARSER.declareBoolean(MultiGetRequest::setRefresh, REFRESH);
    PARSER.declareObject(MultiGetRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareBoolean(MultiGetRequest::setSourceEnabled, SOURCE_ENABLED);
    PARSER.declareStringArray(MultiGetRequest::setSourceExcludes, SOURCE_EXCLUDES);
    PARSER.declareStringArray(MultiGetRequest::setSourceIncludes, SOURCE_INCLUDES);
    PARSER.declareStringArray(MultiGetRequest::setStoredFields, STORED_FIELDS);
    PARSER.declareObjectArray(MultiGetRequest::setDocs, (p, t) -> MultiGetOperation.PARSER.apply(p, t), DOCS);
  }

}
