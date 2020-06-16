
package org.elasticsearch.cluster.task_management.list_tasks;

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

public class TaskRetries  implements XContentable<TaskRetries> {
  
  static final ParseField BULK = new ParseField("bulk");
  private Integer _bulk;
  public Integer getBulk() { return this._bulk; }
  public TaskRetries setBulk(Integer val) { this._bulk = val; return this; }


  static final ParseField SEARCH = new ParseField("search");
  private Integer _search;
  public Integer getSearch() { return this._search; }
  public TaskRetries setSearch(Integer val) { this._search = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bulk != null) {
      builder.field(BULK.getPreferredName(), _bulk);
    }
    if (_search != null) {
      builder.field(SEARCH.getPreferredName(), _search);
    }
    builder.endObject();
    return builder;
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
