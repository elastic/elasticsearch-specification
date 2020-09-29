
package org.elasticsearch.search.suggesters.phrase_suggester.smoothing_model;

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

public class LaplaceSmoothingModel  implements XContentable<LaplaceSmoothingModel> {
  
  static final ParseField ALPHA = new ParseField("alpha");
  private double _alpha;
  private boolean _alpha$isSet;
  public double getAlpha() { return this._alpha; }
  public LaplaceSmoothingModel setAlpha(double val) {
    this._alpha = val;
    _alpha$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_alpha$isSet) {
      builder.field(ALPHA.getPreferredName(), _alpha);
    }
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
