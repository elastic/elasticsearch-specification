
package org.elasticsearch.x_pack.transform.put_transform;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.transform.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.x_pack.transform.pivot.*;
import org.elasticsearch.common_abstractions.request.*;

public class PutTransformRequest extends RequestBase<PutTransformRequest> implements XContentable<PutTransformRequest> {
  
  static final ParseField DEFER_VALIDATION = new ParseField("defer_validation");
  private Boolean _deferValidation;
  public Boolean getDeferValidation() { return this._deferValidation; }
  public PutTransformRequest setDeferValidation(Boolean val) { this._deferValidation = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutTransformRequest setDescription(String val) { this._description = val; return this; }

  static final ParseField DEST = new ParseField("dest");
  private TransformDestination _dest;
  public TransformDestination getDest() { return this._dest; }
  public PutTransformRequest setDest(TransformDestination val) { this._dest = val; return this; }

  static final ParseField FREQUENCY = new ParseField("frequency");
  private String _frequency;
  public String getFrequency() { return this._frequency; }
  public PutTransformRequest setFrequency(String val) { this._frequency = val; return this; }

  static final ParseField PIVOT = new ParseField("pivot");
  private TransformPivot _pivot;
  public TransformPivot getPivot() { return this._pivot; }
  public PutTransformRequest setPivot(TransformPivot val) { this._pivot = val; return this; }

  static final ParseField SOURCE = new ParseField("source");
  private TransformSource _source;
  public TransformSource getSource() { return this._source; }
  public PutTransformRequest setSource(TransformSource val) { this._source = val; return this; }

  static final ParseField SYNC = new ParseField("sync");
  private TransformSyncContainer _sync;
  public TransformSyncContainer getSync() { return this._sync; }
  public PutTransformRequest setSync(TransformSyncContainer val) { this._sync = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_deferValidation != null) {
      builder.field(DEFER_VALIDATION.getPreferredName(), _deferValidation);
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
  }

  @Override
  public PutTransformRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutTransformRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutTransformRequest, Void> PARSER =
    new ObjectParser<>(PutTransformRequest.class.getName(), false, PutTransformRequest::new);

  static {
    PARSER.declareBoolean(PutTransformRequest::setDeferValidation, DEFER_VALIDATION);
    PARSER.declareString(PutTransformRequest::setDescription, DESCRIPTION);
    PARSER.declareObject(PutTransformRequest::setDest, (p, t) -> TransformDestination.PARSER.apply(p, t), DEST);
    PARSER.declareString(PutTransformRequest::setFrequency, FREQUENCY);
    PARSER.declareObject(PutTransformRequest::setPivot, (p, t) -> TransformPivot.PARSER.apply(p, t), PIVOT);
    PARSER.declareObject(PutTransformRequest::setSource, (p, t) -> TransformSource.PARSER.apply(p, t), SOURCE);
    PARSER.declareObject(PutTransformRequest::setSync, (p, t) -> TransformSyncContainer.PARSER.apply(p, t), SYNC);
  }

}
