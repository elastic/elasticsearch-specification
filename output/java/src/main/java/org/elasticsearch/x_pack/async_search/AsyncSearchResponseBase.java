
package org.elasticsearch.x_pack.async_search;

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
import org.elasticsearch.x_pack.async_search.*;

public class AsyncSearchResponseBase<TDocument>  implements XContentable<AsyncSearchResponseBase<TDocument>> {
  
  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public AsyncSearchResponseBase<TDocument> setId(String val) { this._id = val; return this; }


  static final ParseField IS_PARTIAL = new ParseField("is_partial");
  private Boolean _isPartial;
  public Boolean getIsPartial() { return this._isPartial; }
  public AsyncSearchResponseBase<TDocument> setIsPartial(Boolean val) { this._isPartial = val; return this; }


  static final ParseField START_TIME_IN_MILLIS = new ParseField("start_time_in_millis");
  private Long _startTimeInMillis;
  public Long getStartTimeInMillis() { return this._startTimeInMillis; }
  public AsyncSearchResponseBase<TDocument> setStartTimeInMillis(Long val) { this._startTimeInMillis = val; return this; }


  static final ParseField START_TIME = new ParseField("start_time");
  private Date _startTime;
  public Date getStartTime() { return this._startTime; }
  public AsyncSearchResponseBase<TDocument> setStartTime(Date val) { this._startTime = val; return this; }


  static final ParseField IS_RUNNING = new ParseField("is_running");
  private Boolean _isRunning;
  public Boolean getIsRunning() { return this._isRunning; }
  public AsyncSearchResponseBase<TDocument> setIsRunning(Boolean val) { this._isRunning = val; return this; }


  static final ParseField EXPIRATION_TIME_IN_MILLIS = new ParseField("expiration_time_in_millis");
  private Long _expirationTimeInMillis;
  public Long getExpirationTimeInMillis() { return this._expirationTimeInMillis; }
  public AsyncSearchResponseBase<TDocument> setExpirationTimeInMillis(Long val) { this._expirationTimeInMillis = val; return this; }


  static final ParseField EXPIRATION_TIME = new ParseField("expiration_time");
  private Date _expirationTime;
  public Date getExpirationTime() { return this._expirationTime; }
  public AsyncSearchResponseBase<TDocument> setExpirationTime(Date val) { this._expirationTime = val; return this; }


  static final ParseField RESPONSE = new ParseField("response");
  private AsyncSearch<TDocument> _response;
  public AsyncSearch<TDocument> getResponse() { return this._response; }
  public AsyncSearchResponseBase<TDocument> setResponse(AsyncSearch<TDocument> val) { this._response = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_isPartial != null) {
      builder.field(IS_PARTIAL.getPreferredName(), _isPartial);
    }
    if (_startTimeInMillis != null) {
      builder.field(START_TIME_IN_MILLIS.getPreferredName(), _startTimeInMillis);
    }
    if (_startTime != null) {
      builder.field(START_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_startTime.toInstant()));
    }
    if (_isRunning != null) {
      builder.field(IS_RUNNING.getPreferredName(), _isRunning);
    }
    if (_expirationTimeInMillis != null) {
      builder.field(EXPIRATION_TIME_IN_MILLIS.getPreferredName(), _expirationTimeInMillis);
    }
    if (_expirationTime != null) {
      builder.field(EXPIRATION_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_expirationTime.toInstant()));
    }
    if (_response != null) {
      builder.field(RESPONSE.getPreferredName());
      _response.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AsyncSearchResponseBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchResponseBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchResponseBase, Void> PARSER =
    new ObjectParser<>(AsyncSearchResponseBase.class.getName(), false, AsyncSearchResponseBase::new);

  static {
    PARSER.declareString(AsyncSearchResponseBase::setId, ID);
    PARSER.declareBoolean(AsyncSearchResponseBase::setIsPartial, IS_PARTIAL);
    PARSER.declareLong(AsyncSearchResponseBase::setStartTimeInMillis, START_TIME_IN_MILLIS);
    PARSER.declareObject(AsyncSearchResponseBase::setStartTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START_TIME);
    PARSER.declareBoolean(AsyncSearchResponseBase::setIsRunning, IS_RUNNING);
    PARSER.declareLong(AsyncSearchResponseBase::setExpirationTimeInMillis, EXPIRATION_TIME_IN_MILLIS);
    PARSER.declareObject(AsyncSearchResponseBase::setExpirationTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), EXPIRATION_TIME);
    AsyncSearch _response = new AsyncSearch<>();
    PARSER.declareObject(AsyncSearchResponseBase::setResponse, (p, t) -> _response.PARSER.apply(p, t), RESPONSE);
  }

}
