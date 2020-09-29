
package org.elasticsearch.document.multiple.bulk;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class BulkRequest<TSource> extends RequestBase<BulkRequest> implements XContentable<BulkRequest> {
  
  static final ParseField PIPELINE = new ParseField("pipeline");
  private String _pipeline;
  public String getPipeline() { return this._pipeline; }
  public BulkRequest<TSource> setPipeline(String val) { this._pipeline = val; return this; }

  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public BulkRequest<TSource> setRefresh(Refresh val) { this._refresh = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public BulkRequest<TSource> setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField SOURCE_ENABLED = new ParseField("source_enabled");
  private Boolean _sourceEnabled;
  public Boolean getSourceEnabled() { return this._sourceEnabled; }
  public BulkRequest<TSource> setSourceEnabled(Boolean val) { this._sourceEnabled = val; return this; }

  static final ParseField SOURCE_EXCLUDES = new ParseField("source_excludes");
  private List<String> _sourceExcludes;
  public List<String> getSourceExcludes() { return this._sourceExcludes; }
  public BulkRequest<TSource> setSourceExcludes(List<String> val) { this._sourceExcludes = val; return this; }

  static final ParseField SOURCE_INCLUDES = new ParseField("source_includes");
  private List<String> _sourceIncludes;
  public List<String> getSourceIncludes() { return this._sourceIncludes; }
  public BulkRequest<TSource> setSourceIncludes(List<String> val) { this._sourceIncludes = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public BulkRequest<TSource> setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField TYPE_QUERY_STRING = new ParseField("type_query_string");
  private String _typeQueryString;
  public String getTypeQueryString() { return this._typeQueryString; }
  public BulkRequest<TSource> setTypeQueryString(String val) { this._typeQueryString = val; return this; }

  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public BulkRequest<TSource> setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_pipeline != null) {
      builder.field(PIPELINE.getPreferredName(), _pipeline);
    }
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
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
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_typeQueryString != null) {
      builder.field(TYPE_QUERY_STRING.getPreferredName(), _typeQueryString);
    }
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
  }

  @Override
  public BulkRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkRequest, Void> PARSER =
    new ObjectParser<>(BulkRequest.class.getName(), false, BulkRequest::new);

  static {
    PARSER.declareString(BulkRequest::setPipeline, PIPELINE);
    PARSER.declareField(BulkRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(BulkRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareBoolean(BulkRequest::setSourceEnabled, SOURCE_ENABLED);
    PARSER.declareStringArray(BulkRequest::setSourceExcludes, SOURCE_EXCLUDES);
    PARSER.declareStringArray(BulkRequest::setSourceIncludes, SOURCE_INCLUDES);
    PARSER.declareString(BulkRequest::setTimeout, TIMEOUT);
    PARSER.declareString(BulkRequest::setTypeQueryString, TYPE_QUERY_STRING);
    PARSER.declareString(BulkRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
  }

}
