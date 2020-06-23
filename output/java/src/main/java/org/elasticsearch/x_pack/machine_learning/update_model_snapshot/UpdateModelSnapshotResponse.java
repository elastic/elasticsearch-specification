
package org.elasticsearch.x_pack.machine_learning.update_model_snapshot;

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
import org.elasticsearch.x_pack.machine_learning.job.process.*;

public class UpdateModelSnapshotResponse  implements XContentable<UpdateModelSnapshotResponse> {
  
  static final ParseField MODEL = new ParseField("model");
  private ModelSnapshot _model;
  public ModelSnapshot getModel() { return this._model; }
  public UpdateModelSnapshotResponse setModel(ModelSnapshot val) { this._model = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_model != null) {
      builder.field(MODEL.getPreferredName());
      _model.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public UpdateModelSnapshotResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateModelSnapshotResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateModelSnapshotResponse, Void> PARSER =
    new ObjectParser<>(UpdateModelSnapshotResponse.class.getName(), false, UpdateModelSnapshotResponse::new);

  static {
    PARSER.declareObject(UpdateModelSnapshotResponse::setModel, (p, t) -> ModelSnapshot.PARSER.apply(p, t), MODEL);
  }

}
