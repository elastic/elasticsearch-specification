
package org.elasticsearch.cluster.cluster_pending_tasks;

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
import org.elasticsearch.internal.*;

public class PendingTask  implements XContentable<PendingTask> {
  
  static final ParseField INSERT_ORDER = new ParseField("insert_order");
  private Integer _insertOrder;
  public Integer getInsertOrder() { return this._insertOrder; }
  public PendingTask setInsertOrder(Integer val) { this._insertOrder = val; return this; }


  static final ParseField PRIORITY = new ParseField("priority");
  private String _priority;
  public String getPriority() { return this._priority; }
  public PendingTask setPriority(String val) { this._priority = val; return this; }


  static final ParseField SOURCE = new ParseField("source");
  private String _source;
  public String getSource() { return this._source; }
  public PendingTask setSource(String val) { this._source = val; return this; }


  static final ParseField TIME_IN_QUEUE = new ParseField("time_in_queue");
  private String _timeInQueue;
  public String getTimeInQueue() { return this._timeInQueue; }
  public PendingTask setTimeInQueue(String val) { this._timeInQueue = val; return this; }


  static final ParseField TIME_IN_QUEUE_MILLIS = new ParseField("time_in_queue_millis");
  private Integer _timeInQueueMillis;
  public Integer getTimeInQueueMillis() { return this._timeInQueueMillis; }
  public PendingTask setTimeInQueueMillis(Integer val) { this._timeInQueueMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_insertOrder != null) {
      builder.field(INSERT_ORDER.getPreferredName(), _insertOrder);
    }
    if (_priority != null) {
      builder.field(PRIORITY.getPreferredName(), _priority);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
    if (_timeInQueue != null) {
      builder.field(TIME_IN_QUEUE.getPreferredName(), _timeInQueue);
    }
    if (_timeInQueueMillis != null) {
      builder.field(TIME_IN_QUEUE_MILLIS.getPreferredName(), _timeInQueueMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PendingTask fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PendingTask.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PendingTask, Void> PARSER =
    new ObjectParser<>(PendingTask.class.getName(), false, PendingTask::new);

  static {
    PARSER.declareInt(PendingTask::setInsertOrder, INSERT_ORDER);
    PARSER.declareString(PendingTask::setPriority, PRIORITY);
    PARSER.declareString(PendingTask::setSource, SOURCE);
    PARSER.declareString(PendingTask::setTimeInQueue, TIME_IN_QUEUE);
    PARSER.declareInt(PendingTask::setTimeInQueueMillis, TIME_IN_QUEUE_MILLIS);
  }

}
