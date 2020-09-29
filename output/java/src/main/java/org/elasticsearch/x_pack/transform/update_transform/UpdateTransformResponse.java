
package org.elasticsearch.x_pack.transform.update_transform;

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
import org.elasticsearch.x_pack.transform.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.x_pack.transform.pivot.*;
import org.elasticsearch.common_abstractions.response.*;

public class UpdateTransformResponse extends ResponseBase<UpdateTransformResponse> implements XContentable<UpdateTransformResponse> {
  
  static final ParseField CREATE_TIME = new ParseField("create_time");
  private long _createTime;
  private boolean _createTime$isSet;
  public long getCreateTime() { return this._createTime; }
  public UpdateTransformResponse setCreateTime(long val) {
    this._createTime = val;
    _createTime$isSet = true;
    return this;
  }

  static final ParseField CREATE_TIME_DATE_TIME = new ParseField("create_time_date_time");
  private Date _createTimeDateTime;
  public Date getCreateTimeDateTime() { return this._createTimeDateTime; }
  public UpdateTransformResponse setCreateTimeDateTime(Date val) { this._createTimeDateTime = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public UpdateTransformResponse setDescription(String val) { this._description = val; return this; }

  static final ParseField DEST = new ParseField("dest");
  private TransformDestination _dest;
  public TransformDestination getDest() { return this._dest; }
  public UpdateTransformResponse setDest(TransformDestination val) { this._dest = val; return this; }

  static final ParseField FREQUENCY = new ParseField("frequency");
  private String _frequency;
  public String getFrequency() { return this._frequency; }
  public UpdateTransformResponse setFrequency(String val) { this._frequency = val; return this; }

  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public UpdateTransformResponse setId(String val) { this._id = val; return this; }

  static final ParseField PIVOT = new ParseField("pivot");
  private TransformPivot _pivot;
  public TransformPivot getPivot() { return this._pivot; }
  public UpdateTransformResponse setPivot(TransformPivot val) { this._pivot = val; return this; }

  static final ParseField SOURCE = new ParseField("source");
  private TransformSource _source;
  public TransformSource getSource() { return this._source; }
  public UpdateTransformResponse setSource(TransformSource val) { this._source = val; return this; }

  static final ParseField SYNC = new ParseField("sync");
  private TransformSyncContainer _sync;
  public TransformSyncContainer getSync() { return this._sync; }
  public UpdateTransformResponse setSync(TransformSyncContainer val) { this._sync = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public UpdateTransformResponse setVersion(String val) { this._version = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_createTime$isSet) {
      builder.field(CREATE_TIME.getPreferredName(), _createTime);
    }
    if (_createTimeDateTime != null) {
      builder.field(CREATE_TIME_DATE_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_createTimeDateTime.toInstant()));
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_dest != null) {
      builder.field(DEST.getPreferredName());
      _dest.toXContent(builder, params);
    }
    if (_frequency != null) {
      builder.field(FREQUENCY.getPreferredName(), _frequency);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_pivot != null) {
      builder.field(PIVOT.getPreferredName());
      _pivot.toXContent(builder, params);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.toXContent(builder, params);
    }
    if (_sync != null) {
      builder.field(SYNC.getPreferredName());
      _sync.toXContent(builder, params);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public UpdateTransformResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateTransformResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateTransformResponse, Void> PARSER =
    new ObjectParser<>(UpdateTransformResponse.class.getName(), false, UpdateTransformResponse::new);

  static {
    PARSER.declareLong(UpdateTransformResponse::setCreateTime, CREATE_TIME);
    PARSER.declareObject(UpdateTransformResponse::setCreateTimeDateTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), CREATE_TIME_DATE_TIME);
    PARSER.declareString(UpdateTransformResponse::setDescription, DESCRIPTION);
    PARSER.declareObject(UpdateTransformResponse::setDest, (p, t) -> TransformDestination.PARSER.apply(p, t), DEST);
    PARSER.declareString(UpdateTransformResponse::setFrequency, FREQUENCY);
    PARSER.declareString(UpdateTransformResponse::setId, ID);
    PARSER.declareObject(UpdateTransformResponse::setPivot, (p, t) -> TransformPivot.PARSER.apply(p, t), PIVOT);
    PARSER.declareObject(UpdateTransformResponse::setSource, (p, t) -> TransformSource.PARSER.apply(p, t), SOURCE);
    PARSER.declareObject(UpdateTransformResponse::setSync, (p, t) -> TransformSyncContainer.PARSER.apply(p, t), SYNC);
    PARSER.declareString(UpdateTransformResponse::setVersion, VERSION);
  }

}
