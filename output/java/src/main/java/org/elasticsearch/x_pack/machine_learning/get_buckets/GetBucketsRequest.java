
package org.elasticsearch.x_pack.machine_learning.get_buckets;

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

public class GetBucketsRequest  implements XContentable<GetBucketsRequest> {
  
  static final ParseField ANOMALY_SCORE = new ParseField("anomaly_score");
  private Double _anomalyScore;
  public Double getAnomalyScore() { return this._anomalyScore; }
  public GetBucketsRequest setAnomalyScore(Double val) { this._anomalyScore = val; return this; }


  static final ParseField DESC = new ParseField("desc");
  private Boolean _desc;
  public Boolean getDesc() { return this._desc; }
  public GetBucketsRequest setDesc(Boolean val) { this._desc = val; return this; }


  static final ParseField END = new ParseField("end");
  private Date _end;
  public Date getEnd() { return this._end; }
  public GetBucketsRequest setEnd(Date val) { this._end = val; return this; }


  static final ParseField EXCLUDE_INTERIM = new ParseField("exclude_interim");
  private Boolean _excludeInterim;
  public Boolean getExcludeInterim() { return this._excludeInterim; }
  public GetBucketsRequest setExcludeInterim(Boolean val) { this._excludeInterim = val; return this; }


  static final ParseField EXPAND = new ParseField("expand");
  private Boolean _expand;
  public Boolean getExpand() { return this._expand; }
  public GetBucketsRequest setExpand(Boolean val) { this._expand = val; return this; }


  static final ParseField PAGE = new ParseField("page");
  private Page _page;
  public Page getPage() { return this._page; }
  public GetBucketsRequest setPage(Page val) { this._page = val; return this; }


  static final ParseField SORT = new ParseField("sort");
  private Field _sort;
  public Field getSort() { return this._sort; }
  public GetBucketsRequest setSort(Field val) { this._sort = val; return this; }


  static final ParseField START = new ParseField("start");
  private Date _start;
  public Date getStart() { return this._start; }
  public GetBucketsRequest setStart(Date val) { this._start = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_anomalyScore != null) {
      builder.field(ANOMALY_SCORE.getPreferredName(), _anomalyScore);
    }
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
    if (_expand != null) {
      builder.field(EXPAND.getPreferredName(), _expand);
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
  public GetBucketsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetBucketsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetBucketsRequest, Void> PARSER =
    new ObjectParser<>(GetBucketsRequest.class.getName(), false, GetBucketsRequest::new);

  static {
    PARSER.declareDouble(GetBucketsRequest::setAnomalyScore, ANOMALY_SCORE);
    PARSER.declareBoolean(GetBucketsRequest::setDesc, DESC);
    PARSER.declareObject(GetBucketsRequest::setEnd, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), END);
    PARSER.declareBoolean(GetBucketsRequest::setExcludeInterim, EXCLUDE_INTERIM);
    PARSER.declareBoolean(GetBucketsRequest::setExpand, EXPAND);
    PARSER.declareObject(GetBucketsRequest::setPage, (p, t) -> Page.PARSER.apply(p, t), PAGE);
    PARSER.declareObject(GetBucketsRequest::setSort, (p, t) -> Field.createFrom(p), SORT);
    PARSER.declareObject(GetBucketsRequest::setStart, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START);
  }

}
