
package org.elasticsearch.cluster.task_management.list_tasks;

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

public class TaskRetries  implements XContentable<TaskRetries> {
  
  static final ParseField BULK = new ParseField("bulk");
  private int _bulk;
  private boolean _bulk$isSet;
  public int getBulk() { return this._bulk; }
  public TaskRetries setBulk(int val) {
    this._bulk = val;
    _bulk$isSet = true;
    return this;
  }

  static final ParseField SEARCH = new ParseField("search");
  private int _search;
  private boolean _search$isSet;
  public int getSearch() { return this._search; }
  public TaskRetries setSearch(int val) {
    this._search = val;
    _search$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_bulk$isSet) {
      builder.field(BULK.getPreferredName(), _bulk);
    }
    if (_search$isSet) {
      builder.field(SEARCH.getPreferredName(), _search);
    }
  }

  @Override
  public TaskRetries fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TaskRetries.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TaskRetries, Void> PARSER =
    new ObjectParser<>(TaskRetries.class.getName(), false, TaskRetries::new);

  static {
    PARSER.declareInt(TaskRetries::setBulk, BULK);
    PARSER.declareInt(TaskRetries::setSearch, SEARCH);
  }

}
