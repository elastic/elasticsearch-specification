
package org.elasticsearch.x_pack.machine_learning.get_model_snapshots;

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
import org.elasticsearch.x_pack.machine_learning.job.*;
import org.elasticsearch.common_abstractions.infer.field.*;

public class GetModelSnapshotsRequest  implements XContentable<GetModelSnapshotsRequest> {
  
  static final ParseField DESC = new ParseField("desc");
  private Boolean _desc;
  public Boolean getDesc() { return this._desc; }
  public GetModelSnapshotsRequest setDesc(Boolean val) { this._desc = val; return this; }


  static final ParseField END = new ParseField("end");
  private Date _end;
  public Date getEnd() { return this._end; }
  public GetModelSnapshotsRequest setEnd(Date val) { this._end = val; return this; }


  static final ParseField PAGE = new ParseField("page");
  private Page _page;
  public Page getPage() { return this._page; }
  public GetModelSnapshotsRequest setPage(Page val) { this._page = val; return this; }


  static final ParseField SORT = new ParseField("sort");
  private Field _sort;
  public Field getSort() { return this._sort; }
  public GetModelSnapshotsRequest setSort(Field val) { this._sort = val; return this; }


  static final ParseField START = new ParseField("start");
  private Date _start;
  public Date getStart() { return this._start; }
  public GetModelSnapshotsRequest setStart(Date val) { this._start = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_desc != null) {
      builder.field(DESC.getPreferredName(), _desc);
    }
    if (_end != null) {
      builder.field(END.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_end.toInstant()));
    }
    if (_page != null) {
      builder.field(PAGE.getPreferredName());
      _page.toXContent(builder, params);
    }
    if (_sort != null) {
      builder.field(SORT.getPreferredName());
      _sort.toXContent(builder, params);
    }
    if (_start != null) {
      builder.field(START.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_start.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetModelSnapshotsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetModelSnapshotsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetModelSnapshotsRequest, Void> PARSER =
    new ObjectParser<>(GetModelSnapshotsRequest.class.getName(), false, GetModelSnapshotsRequest::new);

  static {
    PARSER.declareBoolean(GetModelSnapshotsRequest::setDesc, DESC);
    PARSER.declareObject(GetModelSnapshotsRequest::setEnd, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), END);
    PARSER.declareObject(GetModelSnapshotsRequest::setPage, (p, t) -> Page.PARSER.apply(p, t), PAGE);
    PARSER.declareObject(GetModelSnapshotsRequest::setSort, (p, t) -> Field.createFrom(p), SORT);
    PARSER.declareObject(GetModelSnapshotsRequest::setStart, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START);
  }

}
