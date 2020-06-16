
package org.elasticsearch.document.multiple.bulk;

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
import org.elasticsearch.document.multiple.bulk.bulk_operation.*;
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.common_options.time_unit.*;

public class BulkRequest  implements XContentable<BulkRequest> {
  
  static final ParseField OPERATIONS = new ParseField("operations");
  private List<BulkOperation> _operations;
  public List<BulkOperation> getOperations() { return this._operations; }
  public BulkRequest setOperations(List<BulkOperation> val) { this._operations = val; return this; }


  static final ParseField PIPELINE = new ParseField("pipeline");
  private String _pipeline;
  public String getPipeline() { return this._pipeline; }
  public BulkRequest setPipeline(String val) { this._pipeline = val; return this; }


  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public BulkRequest setRefresh(Refresh val) { this._refresh = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public BulkRequest setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField SOURCE_ENABLED = new ParseField("source_enabled");
  private Boolean _sourceEnabled;
  public Boolean getSourceEnabled() { return this._sourceEnabled; }
  public BulkRequest setSourceEnabled(Boolean val) { this._sourceEnabled = val; return this; }


  static final ParseField SOURCE_EXCLUDES = new ParseField("source_excludes");
  private List<Field> _sourceExcludes;
  public List<Field> getSourceExcludes() { return this._sourceExcludes; }
  public BulkRequest setSourceExcludes(List<Field> val) { this._sourceExcludes = val; return this; }


  static final ParseField SOURCE_INCLUDES = new ParseField("source_includes");
  private List<Field> _sourceIncludes;
  public List<Field> getSourceIncludes() { return this._sourceIncludes; }
  public BulkRequest setSourceIncludes(List<Field> val) { this._sourceIncludes = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public BulkRequest setTimeout(Time val) { this._timeout = val; return this; }


  static final ParseField TYPE_QUERY_STRING = new ParseField("type_query_string");
  private String _typeQueryString;
  public String getTypeQueryString() { return this._typeQueryString; }
  public BulkRequest setTypeQueryString(String val) { this._typeQueryString = val; return this; }


  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public BulkRequest setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_operations != null) {
      builder.array(OPERATIONS.getPreferredName(), _operations);
    }
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
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    if (_typeQueryString != null) {
      builder.field(TYPE_QUERY_STRING.getPreferredName(), _typeQueryString);
    }
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public BulkRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkRequest, Void> PARSER =
    new ObjectParser<>(BulkRequest.class.getName(), false, BulkRequest::new);

  static {
    PARSER.declareObjectArray(BulkRequest::setOperations, (p, t) -> BulkOperation.PARSER.apply(p, t), OPERATIONS);
    PARSER.declareString(BulkRequest::setPipeline, PIPELINE);
    PARSER.declareField(BulkRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(BulkRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareBoolean(BulkRequest::setSourceEnabled, SOURCE_ENABLED);
    PARSER.declareObjectArray(BulkRequest::setSourceExcludes, (p, t) -> Field.createFrom(p), SOURCE_EXCLUDES);
    PARSER.declareObjectArray(BulkRequest::setSourceIncludes, (p, t) -> Field.createFrom(p), SOURCE_INCLUDES);
    PARSER.declareObject(BulkRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
    PARSER.declareString(BulkRequest::setTypeQueryString, TYPE_QUERY_STRING);
    PARSER.declareString(BulkRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
  }

}
