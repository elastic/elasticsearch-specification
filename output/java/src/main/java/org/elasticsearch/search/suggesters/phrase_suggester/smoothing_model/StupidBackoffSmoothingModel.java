
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

public class StupidBackoffSmoothingModel  implements XContentable<StupidBackoffSmoothingModel> {
  
  static final ParseField DISCOUNT = new ParseField("discount");
  private double _discount;
  private boolean _discount$isSet;
  public double getDiscount() { return this._discount; }
  public StupidBackoffSmoothingModel setDiscount(double val) {
    this._discount = val;
    _discount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_discount$isSet) {
      builder.field(DISCOUNT.getPreferredName(), _discount);
    }
  }

  @Override
  public StupidBackoffSmoothingModel fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StupidBackoffSmoothingModel.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StupidBackoffSmoothingModel, Void> PARSER =
    new ObjectParser<>(StupidBackoffSmoothingModel.class.getName(), false, StupidBackoffSmoothingModel::new);

  static {
    PARSER.declareDouble(StupidBackoffSmoothingModel::setDiscount, DISCOUNT);
  }

}
