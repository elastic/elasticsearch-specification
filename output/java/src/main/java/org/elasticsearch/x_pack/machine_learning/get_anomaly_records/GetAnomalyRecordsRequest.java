
package org.elasticsearch.x_pack.machine_learning.get_anomaly_records;

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

public class GetAnomalyRecordsRequest  implements XContentable<GetAnomalyRecordsRequest> {
  
  static final ParseField DESC = new ParseField("desc");
  private Boolean _desc;
  public Boolean getDesc() { return this._desc; }
  public GetAnomalyRecordsRequest setDesc(Boolean val) { this._desc = val; return this; }


  static final ParseField END = new ParseField("end");
  private Date _end;
  public Date getEnd() { return this._end; }
  public GetAnomalyRecordsRequest setEnd(Date val) { this._end = val; return this; }


  static final ParseField EXCLUDE_INTERIM = new ParseField("exclude_interim");
  private Boolean _excludeInterim;
  public Boolean getExcludeInterim() { return this._excludeInterim; }
  public GetAnomalyRecordsRequest setExcludeInterim(Boolean val) { this._excludeInterim = val; return this; }


  static final ParseField PAGE = new ParseField("page");
  private Page _page;
  public Page getPage() { return this._page; }
  public GetAnomalyRecordsRequest setPage(Page val) { this._page = val; return this; }


  static final ParseField RECORD_SCORE = new ParseField("record_score");
  private Double _recordScore;
  public Double getRecordScore() { return this._recordScore; }
  public GetAnomalyRecordsRequest setRecordScore(Double val) { this._recordScore = val; return this; }


  static final ParseField SORT = new ParseField("sort");
  private Field _sort;
  public Field getSort() { return this._sort; }
  public GetAnomalyRecordsRequest setSort(Field val) { this._sort = val; return this; }


  static final ParseField START = new ParseField("start");
  private Date _start;
  public Date getStart() { return this._start; }
  public GetAnomalyRecordsRequest setStart(Date val) { this._start = val; return this; }


  
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
    if (_excludeInterim != null) {
      builder.field(EXCLUDE_INTERIM.getPreferredName(), _excludeInterim);
    }
    if (_page != null) {
      builder.field(PAGE.getPreferredName());
      _page.toXContent(builder, params);
    }
    if (_recordScore != null) {
      builder.field(RECORD_SCORE.getPreferredName(), _recordScore);
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
  public GetAnomalyRecordsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetAnomalyRecordsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetAnomalyRecordsRequest, Void> PARSER =
    new ObjectParser<>(GetAnomalyRecordsRequest.class.getName(), false, GetAnomalyRecordsRequest::new);

  static {
    PARSER.declareBoolean(GetAnomalyRecordsRequest::setDesc, DESC);
    PARSER.declareObject(GetAnomalyRecordsRequest::setEnd, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), END);
    PARSER.declareBoolean(GetAnomalyRecordsRequest::setExcludeInterim, EXCLUDE_INTERIM);
    PARSER.declareObject(GetAnomalyRecordsRequest::setPage, (p, t) -> Page.PARSER.apply(p, t), PAGE);
    PARSER.declareDouble(GetAnomalyRecordsRequest::setRecordScore, RECORD_SCORE);
    PARSER.declareObject(GetAnomalyRecordsRequest::setSort, (p, t) -> Field.createFrom(p), SORT);
    PARSER.declareObject(GetAnomalyRecordsRequest::setStart, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START);
  }

}
