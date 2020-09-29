
package org.elasticsearch.cat.cat_data_frame_analytics;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.*;

public class CatDataFrameAnalyticsRecord extends ICatRecord implements XContentable<CatDataFrameAnalyticsRecord> {
  
  static final ParseField ASSIGNMENT_EXPLANATION = new ParseField("assignment_explanation");
  private String _assignmentExplanation;
  public String getAssignmentExplanation() { return this._assignmentExplanation; }
  public CatDataFrameAnalyticsRecord setAssignmentExplanation(String val) { this._assignmentExplanation = val; return this; }

  static final ParseField CREATE_TIME = new ParseField("create_time");
  private String _createTime;
  public String getCreateTime() { return this._createTime; }
  public CatDataFrameAnalyticsRecord setCreateTime(String val) { this._createTime = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public CatDataFrameAnalyticsRecord setDescription(String val) { this._description = val; return this; }

  static final ParseField DEST_INDEX = new ParseField("dest_index");
  private String _destIndex;
  public String getDestIndex() { return this._destIndex; }
  public CatDataFrameAnalyticsRecord setDestIndex(String val) { this._destIndex = val; return this; }

  static final ParseField FAILURE_REASON = new ParseField("failure_reason");
  private String _failureReason;
  public String getFailureReason() { return this._failureReason; }
  public CatDataFrameAnalyticsRecord setFailureReason(String val) { this._failureReason = val; return this; }

  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatDataFrameAnalyticsRecord setId(String val) { this._id = val; return this; }

  static final ParseField MODEL_MEMORY_LIMIT = new ParseField("model_memory_limit");
  private String _modelMemoryLimit;
  public String getModelMemoryLimit() { return this._modelMemoryLimit; }
  public CatDataFrameAnalyticsRecord setModelMemoryLimit(String val) { this._modelMemoryLimit = val; return this; }

  static final ParseField NODE_ADDRESS = new ParseField("node.address");
  private String _nodeAddress;
  public String getNodeAddress() { return this._nodeAddress; }
  public CatDataFrameAnalyticsRecord setNodeAddress(String val) { this._nodeAddress = val; return this; }

  static final ParseField NODE_EPHEMERAL_ID = new ParseField("node.ephemeral_id");
  private String _nodeEphemeralId;
  public String getNodeEphemeralId() { return this._nodeEphemeralId; }
  public CatDataFrameAnalyticsRecord setNodeEphemeralId(String val) { this._nodeEphemeralId = val; return this; }

  static final ParseField NODE_ID = new ParseField("node.id");
  private String _nodeId;
  public String getNodeId() { return this._nodeId; }
  public CatDataFrameAnalyticsRecord setNodeId(String val) { this._nodeId = val; return this; }

  static final ParseField NODE_NAME = new ParseField("node.name");
  private String _nodeName;
  public String getNodeName() { return this._nodeName; }
  public CatDataFrameAnalyticsRecord setNodeName(String val) { this._nodeName = val; return this; }

  static final ParseField PROGRESS = new ParseField("progress");
  private String _progress;
  public String getProgress() { return this._progress; }
  public CatDataFrameAnalyticsRecord setProgress(String val) { this._progress = val; return this; }

  static final ParseField SOURCE_INDEX = new ParseField("source_index");
  private String _sourceIndex;
  public String getSourceIndex() { return this._sourceIndex; }
  public CatDataFrameAnalyticsRecord setSourceIndex(String val) { this._sourceIndex = val; return this; }

  static final ParseField STATE = new ParseField("state");
  private String _state;
  public String getState() { return this._state; }
  public CatDataFrameAnalyticsRecord setState(String val) { this._state = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public CatDataFrameAnalyticsRecord setType(String val) { this._type = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public CatDataFrameAnalyticsRecord setVersion(String val) { this._version = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_assignmentExplanation != null) {
      builder.field(ASSIGNMENT_EXPLANATION.getPreferredName(), _assignmentExplanation);
    }
    if (_createTime != null) {
      builder.field(CREATE_TIME.getPreferredName(), _createTime);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_destIndex != null) {
      builder.field(DEST_INDEX.getPreferredName(), _destIndex);
    }
    if (_failureReason != null) {
      builder.field(FAILURE_REASON.getPreferredName(), _failureReason);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_modelMemoryLimit != null) {
      builder.field(MODEL_MEMORY_LIMIT.getPreferredName(), _modelMemoryLimit);
    }
    if (_nodeAddress != null) {
      builder.field(NODE_ADDRESS.getPreferredName(), _nodeAddress);
    }
    if (_nodeEphemeralId != null) {
      builder.field(NODE_EPHEMERAL_ID.getPreferredName(), _nodeEphemeralId);
    }
    if (_nodeId != null) {
      builder.field(NODE_ID.getPreferredName(), _nodeId);
    }
    if (_nodeName != null) {
      builder.field(NODE_NAME.getPreferredName(), _nodeName);
    }
    if (_progress != null) {
      builder.field(PROGRESS.getPreferredName(), _progress);
    }
    if (_sourceIndex != null) {
      builder.field(SOURCE_INDEX.getPreferredName(), _sourceIndex);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName(), _state);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public CatDataFrameAnalyticsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatDataFrameAnalyticsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatDataFrameAnalyticsRecord, Void> PARSER =
    new ObjectParser<>(CatDataFrameAnalyticsRecord.class.getName(), false, CatDataFrameAnalyticsRecord::new);

  static {
    PARSER.declareString(CatDataFrameAnalyticsRecord::setAssignmentExplanation, ASSIGNMENT_EXPLANATION);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setCreateTime, CREATE_TIME);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setDescription, DESCRIPTION);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setDestIndex, DEST_INDEX);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setFailureReason, FAILURE_REASON);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setId, ID);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setModelMemoryLimit, MODEL_MEMORY_LIMIT);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setNodeAddress, NODE_ADDRESS);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setNodeEphemeralId, NODE_EPHEMERAL_ID);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setNodeId, NODE_ID);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setNodeName, NODE_NAME);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setProgress, PROGRESS);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setSourceIndex, SOURCE_INDEX);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setState, STATE);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setType, TYPE);
    PARSER.declareString(CatDataFrameAnalyticsRecord::setVersion, VERSION);
  }

}
