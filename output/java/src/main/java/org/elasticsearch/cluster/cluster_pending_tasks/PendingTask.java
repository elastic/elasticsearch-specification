
package org.elasticsearch.cluster.cluster_pending_tasks;

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

public class PendingTask  implements XContentable<PendingTask> {
  
  static final ParseField INSERT_ORDER = new ParseField("insert_order");
  private int _insertOrder;
  private boolean _insertOrder$isSet;
  public int getInsertOrder() { return this._insertOrder; }
  public PendingTask setInsertOrder(int val) {
    this._insertOrder = val;
    _insertOrder$isSet = true;
    return this;
  }

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
  private int _timeInQueueMillis;
  private boolean _timeInQueueMillis$isSet;
  public int getTimeInQueueMillis() { return this._timeInQueueMillis; }
  public PendingTask setTimeInQueueMillis(int val) {
    this._timeInQueueMillis = val;
    _timeInQueueMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_insertOrder$isSet) {
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
    if (_timeInQueueMillis$isSet) {
      builder.field(TIME_IN_QUEUE_MILLIS.getPreferredName(), _timeInQueueMillis);
    }
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
