
package org.elasticsearch.search.suggesters.phrase_suggester.smoothing_model;

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

public class LaplaceSmoothingModel  implements XContentable<LaplaceSmoothingModel> {
  
  static final ParseField ALPHA = new ParseField("alpha");
  private Double _alpha;
  public Double getAlpha() { return this._alpha; }
  public LaplaceSmoothingModel setAlpha(Double val) { this._alpha = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_alpha != null) {
      builder.field(ALPHA.getPreferredName(), _alpha);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public LaplaceSmoothingModel fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LaplaceSmoothingModel.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LaplaceSmoothingModel, Void> PARSER =
    new ObjectParser<>(LaplaceSmoothingModel.class.getName(), false, LaplaceSmoothingModel::new);

  static {
    PARSER.declareDouble(LaplaceSmoothingModel::setAlpha, ALPHA);
  }

}
