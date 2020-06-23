
package org.elasticsearch.cat.cat_datafeeds;

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
import org.elasticsearch.x_pack.machine_learning.datafeed.*;

public class CatDatafeedsRecord  implements XContentable<CatDatafeedsRecord> {
  
  static final ParseField ASSIGNMENT_EXPLANATION = new ParseField("assignment_explanation");
  private String _assignmentExplanation;
  public String getAssignmentExplanation() { return this._assignmentExplanation; }
  public CatDatafeedsRecord setAssignmentExplanation(String val) { this._assignmentExplanation = val; return this; }


  static final ParseField BUCKETS_COUNT = new ParseField("buckets.count");
  private String _bucketsCount;
  public String getBucketsCount() { return this._bucketsCount; }
  public CatDatafeedsRecord setBucketsCount(String val) { this._bucketsCount = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatDatafeedsRecord setId(String val) { this._id = val; return this; }


  static final ParseField NODE_ADDRESS = new ParseField("node.address");
  private String _nodeAddress;
  public String getNodeAddress() { return this._nodeAddress; }
  public CatDatafeedsRecord setNodeAddress(String val) { this._nodeAddress = val; return this; }


  static final ParseField NODE_EPHEMERAL_ID = new ParseField("node.ephemeral_id");
  private String _nodeEphemeralId;
  public String getNodeEphemeralId() { return this._nodeEphemeralId; }
  public CatDatafeedsRecord setNodeEphemeralId(String val) { this._nodeEphemeralId = val; return this; }


  static final ParseField NODE_ID = new ParseField("node.id");
  private String _nodeId;
  public String getNodeId() { return this._nodeId; }
  public CatDatafeedsRecord setNodeId(String val) { this._nodeId = val; return this; }


  static final ParseField NODE_NAME = new ParseField("node.name");
  private String _nodeName;
  public String getNodeName() { return this._nodeName; }
  public CatDatafeedsRecord setNodeName(String val) { this._nodeName = val; return this; }


  static final ParseField SEARCH_BUCKET_AVG = new ParseField("search.bucket_avg");
  private String _searchBucketAvg;
  public String getSearchBucketAvg() { return this._searchBucketAvg; }
  public CatDatafeedsRecord setSearchBucketAvg(String val) { this._searchBucketAvg = val; return this; }


  static final ParseField SEARCH_COUNT = new ParseField("search.count");
  private String _searchCount;
  public String getSearchCount() { return this._searchCount; }
  public CatDatafeedsRecord setSearchCount(String val) { this._searchCount = val; return this; }


  static final ParseField SEARCH_EXP_AVG_HOUR = new ParseField("search.exp_avg_hour");
  private String _searchExpAvgHour;
  public String getSearchExpAvgHour() { return this._searchExpAvgHour; }
  public CatDatafeedsRecord setSearchExpAvgHour(String val) { this._searchExpAvgHour = val; return this; }


  static final ParseField SEARCH_TIME = new ParseField("search.time");
  private String _searchTime;
  public String getSearchTime() { return this._searchTime; }
  public CatDatafeedsRecord setSearchTime(String val) { this._searchTime = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private DatafeedState _state;
  public DatafeedState getState() { return this._state; }
  public CatDatafeedsRecord setState(DatafeedState val) { this._state = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_assignmentExplanation != null) {
      builder.field(ASSIGNMENT_EXPLANATION.getPreferredName(), _assignmentExplanation);
    }
    if (_bucketsCount != null) {
      builder.field(BUCKETS_COUNT.getPreferredName(), _bucketsCount);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
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
    if (_searchBucketAvg != null) {
      builder.field(SEARCH_BUCKET_AVG.getPreferredName(), _searchBucketAvg);
    }
    if (_searchCount != null) {
      builder.field(SEARCH_COUNT.getPreferredName(), _searchCount);
    }
    if (_searchExpAvgHour != null) {
      builder.field(SEARCH_EXP_AVG_HOUR.getPreferredName(), _searchExpAvgHour);
    }
    if (_searchTime != null) {
      builder.field(SEARCH_TIME.getPreferredName(), _searchTime);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName());
      _state.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatDatafeedsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatDatafeedsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatDatafeedsRecord, Void> PARSER =
    new ObjectParser<>(CatDatafeedsRecord.class.getName(), false, CatDatafeedsRecord::new);

  static {
    PARSER.declareString(CatDatafeedsRecord::setAssignmentExplanation, ASSIGNMENT_EXPLANATION);
    PARSER.declareString(CatDatafeedsRecord::setBucketsCount, BUCKETS_COUNT);
    PARSER.declareString(CatDatafeedsRecord::setId, ID);
    PARSER.declareString(CatDatafeedsRecord::setNodeAddress, NODE_ADDRESS);
    PARSER.declareString(CatDatafeedsRecord::setNodeEphemeralId, NODE_EPHEMERAL_ID);
    PARSER.declareString(CatDatafeedsRecord::setNodeId, NODE_ID);
    PARSER.declareString(CatDatafeedsRecord::setNodeName, NODE_NAME);
    PARSER.declareString(CatDatafeedsRecord::setSearchBucketAvg, SEARCH_BUCKET_AVG);
    PARSER.declareString(CatDatafeedsRecord::setSearchCount, SEARCH_COUNT);
    PARSER.declareString(CatDatafeedsRecord::setSearchExpAvgHour, SEARCH_EXP_AVG_HOUR);
    PARSER.declareString(CatDatafeedsRecord::setSearchTime, SEARCH_TIME);
    PARSER.declareField(CatDatafeedsRecord::setState, (p, t) -> DatafeedState.PARSER.apply(p), STATE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
