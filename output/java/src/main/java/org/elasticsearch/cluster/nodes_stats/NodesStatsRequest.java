
package org.elasticsearch.cluster.nodes_stats;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class NodesStatsRequest extends RequestBase<NodesStatsRequest> implements XContentable<NodesStatsRequest> {
  
  static final ParseField COMPLETION_FIELDS = new ParseField("completion_fields");
  private List<String> _completionFields;
  public List<String> getCompletionFields() { return this._completionFields; }
  public NodesStatsRequest setCompletionFields(List<String> val) { this._completionFields = val; return this; }

  static final ParseField FIELDDATA_FIELDS = new ParseField("fielddata_fields");
  private List<String> _fielddataFields;
  public List<String> getFielddataFields() { return this._fielddataFields; }
  public NodesStatsRequest setFielddataFields(List<String> val) { this._fielddataFields = val; return this; }

  static final ParseField FIELDS = new ParseField("fields");
  private List<String> _fields;
  public List<String> getFields() { return this._fields; }
  public NodesStatsRequest setFields(List<String> val) { this._fields = val; return this; }

  static final ParseField GROUPS = new ParseField("groups");
  private Boolean _groups;
  public Boolean getGroups() { return this._groups; }
  public NodesStatsRequest setGroups(Boolean val) { this._groups = val; return this; }

  static final ParseField INCLUDE_SEGMENT_FILE_SIZES = new ParseField("include_segment_file_sizes");
  private Boolean _includeSegmentFileSizes;
  public Boolean getIncludeSegmentFileSizes() { return this._includeSegmentFileSizes; }
  public NodesStatsRequest setIncludeSegmentFileSizes(Boolean val) { this._includeSegmentFileSizes = val; return this; }

  static final ParseField LEVEL = new ParseField("level");
  private Level _level;
  public Level getLevel() { return this._level; }
  public NodesStatsRequest setLevel(Level val) { this._level = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public NodesStatsRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField TYPES = new ParseField("types");
  private List<String> _types;
  public List<String> getTypes() { return this._types; }
  public NodesStatsRequest setTypes(List<String> val) { this._types = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_completionFields != null) {
      builder.array(COMPLETION_FIELDS.getPreferredName(), _completionFields);
    }
    if (_fielddataFields != null) {
      builder.array(FIELDDATA_FIELDS.getPreferredName(), _fielddataFields);
    }
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_groups != null) {
      builder.field(GROUPS.getPreferredName(), _groups);
    }
    if (_includeSegmentFileSizes != null) {
      builder.field(INCLUDE_SEGMENT_FILE_SIZES.getPreferredName(), _includeSegmentFileSizes);
    }
    if (_level != null) {
      builder.field(LEVEL.getPreferredName());
      _level.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_types != null) {
      builder.array(TYPES.getPreferredName(), _types);
    }
  }

  @Override
  public NodesStatsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodesStatsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodesStatsRequest, Void> PARSER =
    new ObjectParser<>(NodesStatsRequest.class.getName(), false, NodesStatsRequest::new);

  static {
    PARSER.declareStringArray(NodesStatsRequest::setCompletionFields, COMPLETION_FIELDS);
    PARSER.declareStringArray(NodesStatsRequest::setFielddataFields, FIELDDATA_FIELDS);
    PARSER.declareStringArray(NodesStatsRequest::setFields, FIELDS);
    PARSER.declareBoolean(NodesStatsRequest::setGroups, GROUPS);
    PARSER.declareBoolean(NodesStatsRequest::setIncludeSegmentFileSizes, INCLUDE_SEGMENT_FILE_SIZES);
    PARSER.declareField(NodesStatsRequest::setLevel, (p, t) -> Level.PARSER.apply(p), LEVEL, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(NodesStatsRequest::setTimeout, TIMEOUT);
    PARSER.declareStringArray(NodesStatsRequest::setTypes, TYPES);
  }

}
