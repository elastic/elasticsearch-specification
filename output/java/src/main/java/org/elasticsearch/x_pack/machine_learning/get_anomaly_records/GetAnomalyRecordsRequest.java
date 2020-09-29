
package org.elasticsearch.x_pack.machine_learning.get_anomaly_records;

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
import org.elasticsearch.x_pack.machine_learning.job.*;
import org.elasticsearch.common_abstractions.request.*;

public class GetAnomalyRecordsRequest extends RequestBase<GetAnomalyRecordsRequest> implements XContentable<GetAnomalyRecordsRequest> {
  
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
  private double _recordScore;
  private boolean _recordScore$isSet;
  public double getRecordScore() { return this._recordScore; }
  public GetAnomalyRecordsRequest setRecordScore(double val) {
    this._recordScore = val;
    _recordScore$isSet = true;
    return this;
  }

  static final ParseField SORT = new ParseField("sort");
  private String _sort;
  public String getSort() { return this._sort; }
  public GetAnomalyRecordsRequest setSort(String val) { this._sort = val; return this; }

  static final ParseField START = new ParseField("start");
  private Date _start;
  public Date getStart() { return this._start; }
  public GetAnomalyRecordsRequest setStart(Date val) { this._start = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
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
    if (_recordScore$isSet) {
      builder.field(RECORD_SCORE.getPreferredName(), _recordScore);
    }
    if (_sort != null) {
      builder.field(SORT.getPreferredName(), _sort);
    }
    if (_start != null) {
      builder.field(START.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_start.toInstant()));
    }
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
    PARSER.declareString(GetAnomalyRecordsRequest::setSort, SORT);
    PARSER.declareObject(GetAnomalyRecordsRequest::setStart, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START);
  }

}
