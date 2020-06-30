
package org.elasticsearch.cat.cat_pending_tasks;

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

public class CatPendingTasksRecord  implements XContentable<CatPendingTasksRecord> {
  
  static final ParseField INSERT_ORDER = new ParseField("insertOrder");
  private Integer _insertOrder;
  public Integer getInsertOrder() { return this._insertOrder; }
  public CatPendingTasksRecord setInsertOrder(Integer val) { this._insertOrder = val; return this; }


  static final ParseField PRIORITY = new ParseField("priority");
  private String _priority;
  public String getPriority() { return this._priority; }
  public CatPendingTasksRecord setPriority(String val) { this._priority = val; return this; }


  static final ParseField SOURCE = new ParseField("source");
  private String _source;
  public String getSource() { return this._source; }
  public CatPendingTasksRecord setSource(String val) { this._source = val; return this; }


  static final ParseField TIME_IN_QUEUE = new ParseField("timeInQueue");
  private String _timeInQueue;
  public String getTimeInQueue() { return this._timeInQueue; }
  public CatPendingTasksRecord setTimeInQueue(String val) { this._timeInQueue = val; return this; }


  
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
    builder.endObject();
    return builder;
  }

  @Override
  public CatPendingTasksRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatPendingTasksRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatPendingTasksRecord, Void> PARSER =
    new ObjectParser<>(CatPendingTasksRecord.class.getName(), false, CatPendingTasksRecord::new);

  static {
    PARSER.declareInt(CatPendingTasksRecord::setInsertOrder, INSERT_ORDER);
    PARSER.declareString(CatPendingTasksRecord::setPriority, PRIORITY);
    PARSER.declareString(CatPendingTasksRecord::setSource, SOURCE);
    PARSER.declareString(CatPendingTasksRecord::setTimeInQueue, TIME_IN_QUEUE);
  }

}
