
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
import org.elasticsearch.x_pack.transform.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class UpdateTransformRequest extends RequestBase<UpdateTransformRequest> implements XContentable<UpdateTransformRequest> {
  
  static final ParseField DEFER_VALIDATION = new ParseField("defer_validation");
  private Boolean _deferValidation;
  public Boolean getDeferValidation() { return this._deferValidation; }
  public UpdateTransformRequest setDeferValidation(Boolean val) { this._deferValidation = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public UpdateTransformRequest setDescription(String val) { this._description = val; return this; }

  static final ParseField DEST = new ParseField("dest");
  private TransformDestination _dest;
  public TransformDestination getDest() { return this._dest; }
  public UpdateTransformRequest setDest(TransformDestination val) { this._dest = val; return this; }

  static final ParseField FREQUENCY = new ParseField("frequency");
  private String _frequency;
  public String getFrequency() { return this._frequency; }
  public UpdateTransformRequest setFrequency(String val) { this._frequency = val; return this; }

  static final ParseField SOURCE = new ParseField("source");
  private TransformSource _source;
  public TransformSource getSource() { return this._source; }
  public UpdateTransformRequest setSource(TransformSource val) { this._source = val; return this; }

  static final ParseField SYNC = new ParseField("sync");
  private TransformSyncContainer _sync;
  public TransformSyncContainer getSync() { return this._sync; }
  public UpdateTransformRequest setSync(TransformSyncContainer val) { this._sync = val; return this; }


  
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
  public UpdateTransformRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateTransformRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateTransformRequest, Void> PARSER =
    new ObjectParser<>(UpdateTransformRequest.class.getName(), false, UpdateTransformRequest::new);

  static {
    PARSER.declareBoolean(UpdateTransformRequest::setDeferValidation, DEFER_VALIDATION);
    PARSER.declareString(UpdateTransformRequest::setDescription, DESCRIPTION);
    PARSER.declareObject(UpdateTransformRequest::setDest, (p, t) -> TransformDestination.PARSER.apply(p, t), DEST);
    PARSER.declareString(UpdateTransformRequest::setFrequency, FREQUENCY);
    PARSER.declareObject(UpdateTransformRequest::setSource, (p, t) -> TransformSource.PARSER.apply(p, t), SOURCE);
    PARSER.declareObject(UpdateTransformRequest::setSync, (p, t) -> TransformSyncContainer.PARSER.apply(p, t), SYNC);
  }

}
